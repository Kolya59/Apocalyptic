import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Rule } from '../../../models/rule';
import { Variable } from '../../../models/variable';
import { VariableComponent } from '../variable/variable.component';

@Component({
  selector: 'app-variables',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent {
  constructor(
    private dialogRef: MatDialogRef<VariableListComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Variable[]
  ) {
  }

  // TODO Refactor
  drop(e: CdkDragDrop<Rule>): void {
    // TODO Restore
    // this.store.variables = Service.reorder(e.previousIndex, e.currentIndex, this.store.variables);
  }

  save(): void {
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  insertVariable(): void {
    this.dialog
      .open(VariableComponent, {
        width: '80%',
        data: null
      })
      .afterClosed()
      .subscribe((result: Variable | null) => {
        if (!result) {
          return;
        }
        this.data.push(result);
      });
  }

  editVariable(variable: Variable): void {
    this.dialog
      .open(VariableComponent, {
        width: '80%',
        data: variable
      })
      .afterClosed()
      .subscribe((result: Variable | null) => {
        if (!result) {
          return;
        }
        this.data[this.data.indexOf(variable)] = result;
      });
  }

  removeVariable(variable: Variable): void {
    // TODO Confirm removing
    // TODO Restore
    // this.store.removeVariable(variable.id);
  }
}
