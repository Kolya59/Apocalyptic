import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Domain, IDomain, IVariable, Variable } from '../../../models/models';
import { Store } from '../../../core/store';
import { DomainDialogComponent } from '../domain-dialog/domain-dialog.component';

@Component({
  selector: 'app-variable-dialog',
  templateUrl: './variable-dialog.component.html',
  styleUrls: ['./variable-dialog.component.css']
})
export class VariableDialogComponent implements OnInit {
  options: FormGroup;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<VariableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVariable
  ) {
    if (!this.data) {
      this.data = new Variable(
        Store.getUUID(),
        'New Variable',
        false,
        '',
        new Domain(
          Store.getUUID(),
          'New Domain',
          '',
          []
        )
      );
    }
    this.options = fb.group({
      domain: this.fb.control(this.data.domain, Validators.required),
      description: this.fb.control(this.data.description),
      isRequested: this.fb.control(this.data.isRequested),
      name: this.fb.control(this.data.name, Validators.required)
    });
  }

  ngOnInit() {
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
