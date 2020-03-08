import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Rule } from '../../../models/rule';
import { Statement } from '../../../models/statement';
import { StatementComponent } from '../../statements/statement/statement.component';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent {
  options: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<RuleComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private readonly data: Rule
  ) {
    // TODO Restore
    /*if (!this.data) {
      this.data = new Rule(Store.getUUID(), 'New Rule', [], [], '');
    }*/
    this.options = fb.group({
      name: this.fb.control(this.data.name, Validators.required),
      premises: this.fb.array(this.data.premises.map(value => this.fb.control(value, Validators.required))),
      conclusions: this.fb.array(
        this.data.conclusions.map(value => this.fb.control(value)),
        Validators.required
      ),
      description: this.fb.control(this.data.description)
    });
  }

  addStatement(container: Statement[]) {
    const dialog = this.dialog.open(StatementComponent, {
      width: '80%',
      data: null
    });
    dialog.afterClosed().subscribe((result: Statement | null) => {
      if (!result) {
        return;
      }
      container.push(result);
    });
  }

  editStatement(statement: Statement) {
    const dialog = this.dialog.open(StatementComponent, {
      width: '80%',
      data: statement
    });
    dialog.afterClosed().subscribe((result: Statement | null) => {
      if (!result) {
        return;
      }
      statement = result;
    });
  }

  // TODO Refactor
  removeStatement(statement: Statement, container: Statement[]) {
    container = container.filter(item => {
      return item === statement;
    });
  }

  submit() {
    this.data.name = this.options.controls.name.value;
    this.data.premises = this.options.controls.premises.value;
    this.data.conclusions = this.options.controls.conclusions.value;
    this.data.description = this.options.controls.description.value;
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
