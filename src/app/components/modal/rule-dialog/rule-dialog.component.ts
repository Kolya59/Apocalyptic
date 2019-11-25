import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { IRule, IStatement, Rule } from '../../../core/models';
import { Store } from '../../../core/store';
import { StatementDialogComponent } from '../statement-dialog/statement-dialog.component';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule-dialog.component.html',
  styleUrls: ['./rule-dialog.component.css']
})
export class RuleDialogComponent implements OnInit {
  options: FormGroup;

  constructor(private readonly store: Store,
              private readonly fb: FormBuilder,
              private dialogRef: MatDialogRef<RuleDialogComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private readonly data: IRule
  ) {
    if (!this.data) {
      this.data = new Rule(Store.getUUID(), 'New Rule', [], [], '');
    }
    this.options = fb.group({
      name: new FormControl(this.data.name, Validators.required),
      premises: new FormArray(this.data.premises.map(value => new FormControl(value, Validators.required))),
      conclusions: new FormArray(this.data.conclusions.map(value => new FormControl(value)), Validators.required),
      description: new FormControl(this.data.description)
    });
  }

  ngOnInit() {}

  addStatement(container: IStatement[]) {
    const dialog = this.dialog.open(StatementDialogComponent, {
      width: '80%',
      data: null
    });
    dialog.afterClosed().subscribe((result: IStatement | null) => {
      if (!result) {
        return;
      }
      container.push(result);
    });
  }

  editStatement(statement: IStatement) {
    const dialog = this.dialog.open(StatementDialogComponent, {
      width: '80%',
      data: statement
    });
    dialog.afterClosed().subscribe((result: IStatement | null) => {
      if (!result) {
        return;
      }
      statement = result;
    });
  }

  // TODO Refactor
  removeStatement(statement: IStatement, container: IStatement[]) {
    container = container.filter((item) => {
      return item === statement;
    });
  }

  submit() {
    this.data.name = this.options.controls.name.value;
    this.data.premises = this.options.controls.premises.value;
    this.data.conclusions = this.options.controls.conclusions.value;
    this.data.description = this.options.controls.description.value;
    console.log('Result', this.data, this.options.controls);
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
