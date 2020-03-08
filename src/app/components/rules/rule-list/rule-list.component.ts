import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rule } from '../../../models/rule';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { Router } from '@angular/router';
import { selectRuleList } from '../../../store/selectors/rule.selector';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent {
  rules$ = this._store.select(selectRuleList);

  constructor(private _store: Store<AppState>, protected router: Router) {
  }

  insertRule() {
    this.router.navigate(['rules', 'new']);
  }

  editRule(rule: Rule) {
    this.router.navigate(['rules', `${rule.id}`]);
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
