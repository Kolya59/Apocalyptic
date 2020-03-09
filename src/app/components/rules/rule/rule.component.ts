import { Component } from '@angular/core';
import { Statement } from '../../../models/statement';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { Rule } from '../../../models/rule';
import { filter, map, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { selectStatementList } from '../../../store/selectors/statement.selector';
import { AddRule, SetSubmittedRuleAction, UpdateRule } from '../../../store/actions/rule.actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent {
  isNew: boolean;
  formState$: Observable<FormGroupState<Rule>>;
  submittedValue$: Observable<Rule | undefined>;

  constructor(private _store: Store<AppState>, protected router: Router, private route: ActivatedRoute, private location: Location) {
    const id = this.route.snapshot.params['id'];
    this.isNew = id === 'new';
    this.formState$ = _store.pipe(select(s => s.ruleForm.formState));
    this.submittedValue$ = _store.pipe(select(s => s.ruleForm.submittedValue));
  }

  getPremises(): Observable<Statement[]> {
    return this._store.select(selectStatementList);
  }

  getConclusions(): Observable<Statement[]> {
    return this._store.select(selectStatementList);
  }

  submit() {
    this.formState$
      .pipe(
        take(1),
        filter(s => s.isValid),
        map(fs => new SetSubmittedRuleAction(fs.value))
      )
      .subscribe(this._store);
  }

  save() {
    this.submit();
    this.submittedValue$.pipe(take(1)).subscribe(next => this._store.dispatch(this.isNew ? new AddRule(next) : new UpdateRule(next)));
    this.router.navigate(['rules']);
  }

  cancel() {
    this.location.back();
  }
}
