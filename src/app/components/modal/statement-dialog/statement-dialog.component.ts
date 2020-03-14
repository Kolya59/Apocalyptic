import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IStatement, Statement} from '../../../core/models';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-statement-dialog',
  templateUrl: './statement-dialog.component.html',
  styleUrls: ['./statement-dialog.component.css']
})
export class StatementDialogComponent {
  options: FormGroup;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<StatementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IStatement
  ) {
    if (!this.data) {
      this.data = new Statement(
        Store.getUUID(),
        '',
        'New Statement',
        store.variables[0],
        store.variables[0].values[0]
      );
    }
    this.options = fb.group({
      name: this.fb.control(this.data.name, Validators.required),
      variable: this.fb.control(this.data.variable, Validators.required),
      value: this.fb.control(this.data.value, Validators.required),
      description: this.fb.control(this.data.description)
    }, {
      validators: []
    });
  }

  submit() {
    this.data.name = this.options.controls.name.value;
    this.data.variable = this.options.controls.variable.value;
    this.data.value = this.options.controls.value.value;
    this.data.description = this.options.controls.description.value;
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
