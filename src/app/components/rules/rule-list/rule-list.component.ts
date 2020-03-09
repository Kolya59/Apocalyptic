import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Rule } from '../../../models/rule';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { selectRuleList } from '../../../store/selectors/rule.selector';
import { RemoveRule, ReorderRules } from '../../../store/actions/rule.actions';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent {
  rules$ = this._store.select(selectRuleList);

  constructor(private _store: Store<AppState>, protected router: Router, private route: ActivatedRoute) {
  }

  insertRule() {
    this.router.navigate(['rules', 'new']);
  }

  editRule(rule: Rule) {
    this.router.navigate(['rules', `${rule.id}`]);
  }

  removeRule(rule: Rule) {
    if (confirm('Are you sure?')) {
      try {
        this._store.dispatch(new RemoveRule(rule.id));
      } catch (e) {
        console.error('Failed to remove rule', e);
        alert(`Failed to remove rule: ${e.message}`);
      }
    }
  }

  drop(e: CdkDragDrop<Rule>) {
    this._store.dispatch(new ReorderRules({ sourceID: e.previousIndex, targetID: e.currentIndex }));
  }
}
