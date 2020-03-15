import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '../../../core/store';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVariable } from '../../../core/models';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.css']
})
export class SetTargetComponent {
  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<SetTargetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVariable
  ) {
    if (!this.data) {
      this.data = this.store.variables[0];
    }
  }

  setTarget(variable: IVariable) {
    this.data = variable;
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
