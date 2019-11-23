import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { IRule, IStatement, Rule, Statement } from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule-dialog.component.html',
  styleUrls: ['./rule-dialog.component.css']
})
export class RuleDialogComponent implements OnInit {

  constructor(private readonly store: Store,
              private dialogRef: MatDialogRef<RuleDialogComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private readonly data: IRule
  ) {
    if (!this.data) {
      this.data = new Rule(Store.getUUID(), null, [], [], null);
    }
  }

  ngOnInit() {}

  // TODO Add new statement dialog
  addStatement(container: IStatement[]) {
    container.push(new Statement(Store.getUUID(), '', 'New Statement', null, ''));
  }

  editStatement(statement: IStatement) {

  }

  removeStatement(statement: IStatement, container: IStatement[]) {

  }

  changeName() {
    this.data.name = document.getElementById('rule-name-content').innerText;
    console.log(this.data.name);
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
