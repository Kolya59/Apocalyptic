import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { IRule, IVariable } from '../../../core/models';
import { Service } from '../../../core/service';
import { Store } from '../../../core/store';
import { VariableDialogComponent } from '../variable-dialog/variable-dialog.component';

@Component({
  selector: 'app-variables',
  templateUrl: './variable-list-dialog.component.html',
  styleUrls: ['./variable-list-dialog.component.css']
})
export class VariableListDialogComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private dialogRef: MatDialogRef<VariableListDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IVariable[]
  ) {
  }

  ngOnInit() {
  }

  // TODO Refactor
  drop(e: CdkDragDrop<IRule>) {
    this.store.variables = Service.reorder(e.previousIndex, e.currentIndex, this.store.variables);
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

  insertVariable() {
    this.dialog.open(VariableDialogComponent, {
      width: '80%',
      data: null
    }).afterClosed().subscribe((result: IVariable | null) => {
      if (!result) {
        return;
      }
      this.data.push(result);
    });
  }

  editVariable(variable: IVariable) {
    this.dialog.open(VariableDialogComponent, {
      width: '80%',
      data: variable
    }).afterClosed().subscribe((result: IVariable | null) => {
      if (!result) {
        return;
      }
      this.data[this.data.indexOf(variable)] = result;
    });
  }

  removeVariable(variable: IVariable) {
    // TODO Confirm removing
    // TODO Refactor
    this.store.removeVariable(variable.id);
  }
}
