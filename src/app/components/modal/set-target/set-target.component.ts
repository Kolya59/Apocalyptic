import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '../../../core/store';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IStatement, IVariable, Statement} from '../../../core/models';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.css']
})
export class SetTargetComponent implements OnInit {

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

  ngOnInit() {
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
