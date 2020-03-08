import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Domain } from '../../../models/domain';
import { Variable } from '../../../models/variable';

@Component({
  selector: 'app-variable-dialog',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent {
  options: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<VariableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variable
  ) {
    // TODO Restore
    /*if (!this.data) {
      this.data = new Variable(Store.getUUID(), 'New Variable', false, '', new Domain(Store.getUUID(), 'New Domain', '', []));
    }*/
    this.options = fb.group({
      domain: this.fb.control(this.data.domain, Validators.required),
      description: this.fb.control(this.data.description),
      isRequested: this.fb.control(this.data.isRequested),
      name: this.fb.control(this.data.name, Validators.required)
    });
  }

  submit() {
    this.data.domain = this.options.controls.domain.value;
    this.data.name = this.options.controls.name.value;
    this.data.isRequested = this.options.controls.isRequested.value;
    this.data.description = this.options.controls.description.value;
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
