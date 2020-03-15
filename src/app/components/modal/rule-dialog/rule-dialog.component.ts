import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { IRule, IStatement, Rule } from '../../../core/models';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule-dialog.component.html',
  styleUrls: ['./rule-dialog.component.css']
})
export class RuleDialogComponent {
  options: FormGroup;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<RuleDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private readonly data: IRule
  ) {
    if (!this.data) {
      this.data = new Rule(Store.getUUID(), 'New Rule', [], [], '');
    }
    this.options = fb.group({
      name: this.fb.control(this.data.name, Validators.required),
      premises: this.fb.array(this.data.premises.map(value => this.fb.control(value, Validators.required))),
      conclusions: this.fb.array(
        this.data.conclusions.map(statement => this.fb.group(fb.control(statement.variable), fb.control(statement.value))),
        Validators.required
      ),
      description: this.fb.control(this.data.description)
    });
  }

  getDomain(index: number, groupName: string): string[] {
    return ((this.options.controls[groupName] as FormArray).at(index).value as IStatement).variable.values;
  }

  addStatement(groupName: string) {
    (this.options.controls[groupName] as FormArray).push(
      this.fb.group({
        variable: this.store.variables[0],
        value: this.store.variables[0].values[0]
      })
    );
  }

  removeStatement(index: number, groupName: string) {
    (this.options.controls[groupName] as FormArray).removeAt(index);
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
