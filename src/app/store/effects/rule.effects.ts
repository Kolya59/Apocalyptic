import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ERuleActions, GetRule, GetRulesSuccess, GetRuleSuccess } from '../actions/rule.actions';
import { RuleService } from '../../services/rule.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectRuleList } from '../selectors/rule.selector';
import { IRule } from '../../models/rule';

@Injectable()
export class RuleEffects {
  @Effect()
  getRule$ = this._actions$.pipe(
    ofType<GetRule>(ERuleActions.GetRule),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectRuleList))),
    switchMap(([id, rules]) => {
      const selectedRule = rules.filter(rule => rule.id === id)[0];
      return of(new GetRuleSuccess(selectedRule));
    })
  );

  @Effect()
  getRules$ = this._actions$.pipe(
    ofType<GetRule>(ERuleActions.GetRules),
    switchMap(() => this._ruleService.getRules()),
    switchMap((rules: IRule[]) => of(new GetRulesSuccess(rules)))
  );

  constructor(
    private _ruleService: RuleService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
