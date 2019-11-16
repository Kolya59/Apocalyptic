import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IRule } from '../../../core/models';

import { Store } from '../../../core/store/store';
import { RuleDialogComponent } from '../../modal/rule-dialog/rule-dialog.component';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {
  constructor(
    public readonly dialog: MatDialog,
    private readonly store: Store
  ) {
    store.insertRule(
      'Rule 1',
      [],
      [],
      'Description 1'
    );
    store.insertRule(
      'Rule 2',
      [],
      [],
      'Description 2'
    );
    store.insertRule(
      'Rule 3',
      [],
      [],
      'Description 3'
    );
    store.insertRule(
      'Rule 4',
      [],
      [],
      'Description 4'
    );
  }

  ngOnInit() {}

  insertRule() {
    const dialogRef = this.dialog.open(RuleDialogComponent, {
      width: '600px',
      data: null
    });
  }

  editRule(rule: IRule) {
    const dialogRef = this.dialog.open(RuleDialogComponent, {
      width: '600px',
      data: rule
    });
  }

  removeRule(rule: IRule) {
    // TODO Confirm removing
    this.store.removeRule(rule.id);
  }

  // TODO Refactor swap elements to reorder
  drop(e: CdkDragDrop<IRule>) {
    const tmp = this.store.rules[e.previousIndex];
    this.store.rules[e.previousIndex] = this.store.rules[e.currentIndex];
    this.store.rules[e.currentIndex] = tmp;
  }

}
