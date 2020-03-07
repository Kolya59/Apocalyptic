import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Variable } from '../../models/variable';

@Component({
  selector: 'app-set-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {
  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<TargetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variable
  ) {
    // TODO Restore
    /*if (!this.data) {
      this.data = this.store.variables[0];
    }*/
  }

  setTarget(variable: Variable): void {
    this.data = variable;
  }

  save(): void {
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
