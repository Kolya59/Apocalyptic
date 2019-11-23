import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Domain, IDomain, IVariable, Variable } from '../../../core/models';
import { Store } from '../../../core/store/store';
import { DomainDialogComponent } from '../domain-dialog/domain-dialog.component';

@Component({
  selector: 'app-variable-dialog',
  templateUrl: './variable-dialog.component.html',
  styleUrls: ['./variable-dialog.component.css']
})
export class VariableDialogComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private dialogRef: MatDialogRef<VariableDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IVariable
  ) {
    if (!this.data) {
      this.data = new Variable(
        Store.getUUID(),
        'New Variable',
        '',
        new Domain(
          Store.getUUID(),
          'New Domain',
          '',
          []
        )
      );
    }
  }

  ngOnInit() {
  }

  editValue() {
    // TODO Handle error
    const dialog = this.dialog.open(DomainDialogComponent, {
      width: '600px',
      data: this.data.domain
    });
    dialog.afterClosed().subscribe((result: IDomain | null) => {
      if (!result) {
        return;
      }
      this.data.domain = result;
    });
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
