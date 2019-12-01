import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IRule } from '../../../core/models';
import { Service } from '../../../core/service';

import { Store } from '../../../core/store';
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
  }

  ngOnInit() {}

  insertRule() {
    this.dialog.open(RuleDialogComponent, {
      width: '80%',
      data: null
    }).afterClosed().subscribe((result: IRule | null) => {
      if (!result) {
        return;
      }
      this.store.rules.push(result);
    });
  }

  editRule(rule: IRule) {
    this.dialog.open(RuleDialogComponent, {
      width: '80%',
      data: rule
    }).afterClosed().subscribe((result: IRule | null) => {
      if (!result) {
        return;
      }
      this.store.rules[this.store.rules.indexOf(rule)] = result;
    });
  }

  removeRule(rule: IRule) {
    // TODO Confirm removing
    this.store.removeRule(rule.id);
  }

  drop(e: CdkDragDrop<IRule>) {
    this.store.rules = Service.reorder(e.previousIndex, e.currentIndex, this.store.rules);
  }

}