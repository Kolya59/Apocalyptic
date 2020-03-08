import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddRule, ERuleActions, GetRule, GetRulesSuccess, GetRuleSuccess, RemoveRule, UpdateRule } from '../actions/rule.actions';
import { RuleService } from '../../services/rule.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectRuleList } from '../selectors/rule.selector';
import { Rule } from '../../models/rule';

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
    switchMap((rules: Rule[]) => of(new GetRulesSuccess(rules)))
  );

  @Effect()
  addRule$ = this._actions$.pipe(
    ofType<AddRule>(ERuleActions.AddRule),
    switchMap(() => this._ruleService.addRule()),
    switchMap((rules: Rule[]) => of(new GetRulesSuccess(rules)))
  );

  @Effect()
  updateRule$ = this._actions$.pipe(
    ofType<UpdateRule>(ERuleActions.UpdateRule),
    switchMap(() => this._ruleService.getRules()),
    switchMap((rules: Rule[]) => of(new GetRulesSuccess(rules)))
  );

  @Effect()
  removeRule$ = this._actions$.pipe(
    ofType<RemoveRule>(ERuleActions.RemoveRule),
    switchMap(() => this._ruleService.getRules()),
    switchMap((rules: Rule[]) => of(new GetRulesSuccess(rules)))
  );

  constructor(private _ruleService: RuleService, private _actions$: Actions, private _store: Store<AppState>) {
  }
}
