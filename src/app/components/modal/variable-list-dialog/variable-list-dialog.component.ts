import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Rule, Variable } from '../../../core/models';
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
    @Inject(MAT_DIALOG_DATA) public data: Variable[]
  ) {
  }

  ngOnInit() {
  }

  // TODO Refactor
  drop(e: CdkDragDrop<Rule>) {
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
    }).afterClosed().subscribe((result: Variable | null) => {
      if (!result) {
        return;
      }
      this.data.push(result);
    });
  }

  editVariable(variable: Variable) {
    this.dialog.open(VariableDialogComponent, {
      width: '80%',
      data: variable
    }).afterClosed().subscribe((result: Variable | null) => {
      if (!result) {
        return;
      }
      this.data[this.data.indexOf(variable)] = result;
    });
  }

  removeVariable(variable: Variable) {
    // TODO Confirm removing
    // TODO Refactor
    this.store.removeVariable(variable.id);
  }
}
