import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { EVariableActions, GetVariable, GetVariablesSuccess, GetVariableSuccess } from '../actions/variable.actions';
import { VariableService } from '../../services/variable.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectVariableList } from '../selectors/variable.selector';
import { Variable } from '../../models/variable';

@Injectable()
export class VariableEffects {
  @Effect()
  getVariable$ = this._actions$.pipe(
    ofType<GetVariable>(EVariableActions.GetVariable),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectVariableList))),
    switchMap(([id, variables]) => {
      const selectedVariable = variables.filter(variable => variable.id === id)[0];
      return of(new GetVariableSuccess(selectedVariable));
    })
  );

  @Effect()
  getVariables$ = this._actions$.pipe(
    ofType<GetVariable>(EVariableActions.GetVariables),
    switchMap(() => this._variableService.getVariables()),
    switchMap((variables: Variable[]) => of(new GetVariablesSuccess(variables)))
  );

  constructor(
    private _variableService: VariableService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
