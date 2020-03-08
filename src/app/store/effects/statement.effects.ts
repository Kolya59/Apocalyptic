import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { EStatementActions, GetStatement, GetStatementsSuccess, GetStatementSuccess } from '../actions/statement.actions';
import { StatementService } from '../../services/statement.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectStatementList } from '../selectors/statement.selector';
import { Statement } from '../../models/statement';

@Injectable()
export class StatementEffects {
  @Effect()
  getStatement$ = this._actions$.pipe(
    ofType<GetStatement>(EStatementActions.GetStatement),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectStatementList))),
    switchMap(([id, statements]) => {
      const selectedStatement = statements.filter(statement => statement.id === id)[0];
      return of(new GetStatementSuccess(selectedStatement));
    })
  );

  @Effect()
  getStatements$ = this._actions$.pipe(
    ofType<GetStatement>(EStatementActions.GetStatements),
    switchMap(() => this._statementService.getStatements()),
    switchMap((statements: Statement[]) => of(new GetStatementsSuccess(statements)))
  );

  constructor(
    private _statementService: StatementService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
