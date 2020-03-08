import { Component } from '@angular/core';
import { Statement } from '../../../models/statement';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { Rule } from '../../../models/rule';
import { filter, map, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { SetSubmittedRuleAction } from '../../../store/actions/rule.form.action';
import { selectStatementList } from '../../../store/selectors/statement.selector';
import { AddRule } from '../../../store/actions/rule.actions';

@Component({
  selector: 'app-rule-dialog',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent {
  formState$: Observable<FormGroupState<Rule>>;
  submittedValue$: Observable<Rule | undefined>;

  constructor(private _store: Store<AppState>, protected router: Router) {
    this.formState$ = _store.pipe(select(s => s.ruleForms.formState));
    this.submittedValue$ = _store.pipe(select(s => s.ruleForms.submittedValue));
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
        tap(fs => this._store.dispatch(new AddRule(fs.value))),
        map(fs => new SetSubmittedRuleAction(fs.value))
      )
      .subscribe(this._store);
    this.router.navigate(['rules']);
  }

  cancel() {
    this.router.navigate(['rules']);
  }
}
