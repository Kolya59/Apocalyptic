import { Action } from '@ngrx/store';

import { IStatement } from '../../models/statement';

export enum EStatementActions {
  GetStatements = '[Statement] Get Statements',
  GetStatementsSuccess = '[Statement] Get Statements Success',
  GetStatement = '[Statement] Get Statement',
  GetStatementSuccess = '[Statement] Get Statement Success'
}

export class GetStatements implements Action {
  public readonly type = EStatementActions.GetStatements;
}

export class GetStatementsSuccess implements Action {
  public readonly type = EStatementActions.GetStatementsSuccess;
  constructor(public payload: IStatement[]) {}
}

export class GetStatement implements Action {
  public readonly type = EStatementActions.GetStatement;
  constructor(public payload: string) {}
}

export class GetStatementSuccess implements Action {
  public readonly type = EStatementActions.GetStatementSuccess;
  constructor(public payload: IStatement) {}
}

export type StatementActions =
  | GetStatements
  | GetStatementsSuccess
  | GetStatement
  | GetStatementSuccess;
