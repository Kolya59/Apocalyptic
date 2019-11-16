import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Domain, IRule, IVariable } from '../../../core/models';
import { Store } from '../../../core/store/store';
import { v4 as uuid } from 'uuid';
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
    store.insertVariable(
      'Variable 1',
      'Description 1',
      new Domain(
        uuid.toString(),
        'Domain 1',
        'Description 1',
        []
      )
    );
    store.insertVariable(
      'Variable 2',
      'Description 2',
      new Domain(
        uuid.toString(),
        'Domain 2',
        'Description 2',
        []
      )
    );
    store.insertVariable(
      'Variable 3',
      'Description 3',
      new Domain(
        uuid.toString(),
        'Domain 3',
        'Description 3',
        []
      )
    );
  }

  ngOnInit() {
  }

  drop(e: CdkDragDrop<IRule>) {
    const tmp = this.store.variables[e.previousIndex];
    this.store.variables[e.previousIndex] = this.store.variables[e.currentIndex];
    this.store.variables[e.currentIndex] = tmp;
  }

  save() {
    // TODO Save changes
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  insertVariable() {
    const dialog = this.dialog.open(VariableDialogComponent, {
      width: '80%',
      data: null
    });
    dialog.afterClosed().subscribe((result: IVariable | null) => {
      if (!result) {
        return;
      }
      this.store.variables.push(result);
    });
  }

  editVariable(variable: IVariable) {
    const dialog = this.dialog.open(VariableDialogComponent, {
      width: '80%',
      data: variable
    });
    dialog.afterClosed().subscribe((result: IVariable | null) => {
      if (!result) {
        return;
      }
      this.store.variables[this.store.variables.indexOf(variable)] = result;
    });
  }

  removeVariable(variable: IVariable) {
    // TODO Confirm removing
    this.store.removeVariable(variable.id);
  }
}
