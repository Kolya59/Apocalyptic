import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IStatement, Statement} from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-statement-dialog',
  templateUrl: './statement-dialog.component.html',
  styleUrls: ['./statement-dialog.component.css']
})
export class StatementDialogComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private dialogRef: MatDialogRef<StatementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IStatement
  ) {
    if (!this.data) {
      this.data = new Statement(
        Store.getUUID(),
        '',
        'New Statement',
        null,
        ''
      );
    }
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
