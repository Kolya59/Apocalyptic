import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Rule } from '../../../models/rule';
import { Service } from '../../../services/service';

import { RuleDialogComponent } from '../rule-dialog/rule-dialog.component';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent {
  @Input()
  rules: Rule[];

  @Output()
  ruleSelected: EventEmitter<string> = new EventEmitter();

  constructor(private _store: Store<IAppState>, public readonly dialog: MatDialog) {
  }

  insertRule() {
    this.dialog
      .open(RuleDialogComponent, {
        width: '80%',
        data: null
      })
      .afterClosed()
      .subscribe((result: Rule | null) => {
        if (!result) {
          return;
        }
        // TODO Restore
        // this.store.rules.push(result);
      });
  }

  editRule(rule: Rule) {
    this.dialog
      .open(RuleDialogComponent, {
        width: '80%',
        data: rule
      })
      .afterClosed()
      .subscribe((result: Rule | null) => {
        if (!result) {
          return;
        }
        // TODO Restore
        // this.store.rules[this.store.rules.indexOf(rule)] = result;
      });
  }

  async removeRule(rule: Rule) {
    if (confirm('Are you sure?')) {
      try {
        // TODO Restore
        // await this.store.removeRule(rule.id);
      } catch (e) {
        console.error('Failed to remove rule', e);
        alert(`Failed to remove rule: ${e.message}`);
      }
    }
  }

  drop(e: CdkDragDrop<Rule>) {
    // TODO Restore
    // this.store.rules = Service.reorder(e.previousIndex, e.currentIndex, this.store.rules);
  }
}
