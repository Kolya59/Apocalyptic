import { Action } from '@ngrx/store';

import { Statement } from '../../models/statement';

export enum EStatementActions {
  GetStatements = '[Statement] Get Statements',
  GetStatementsSuccess = '[Statement] Get Statements Success',
  GetStatementsError = '[Statement] Get Statements Error',
  GetStatement = '[Statement] Get Statement',
  GetStatementSuccess = '[Statement] Get Statement Success',
  GetStatementError = '[Statement] Get Statement Error',
  AddStatement = '[Statement] Add Statement',
  AddStatementSuccess = '[Statement] Add Statement Success',
  AddStatementError = '[Statement] Add Statement Error',
  UpdateStatement = '[Statement] Update Statement',
  UpdateStatementSuccess = '[Statement] Update Statement Success',
  UpdateStatementError = '[Statement] Update Statement Error',
  RemoveStatement = '[Statement] Remove',
  RemoveStatementSuccess = '[Statement] Remove Statement Success',
  RemoveStatementError = '[Statement] Remove StatementErrors'
}

export class GetStatements implements Action {
  public readonly type = EStatementActions.GetStatements;
}

export class GetStatementsSuccess implements Action {
  public readonly type = EStatementActions.GetStatementsSuccess;

  constructor(public payload: Statement[]) {
  }
}

export class GetStatementsError implements Action {
  public readonly type = EStatementActions.GetStatementsError;

  constructor(public payload: Statement[]) {
  }
}

export class GetStatement implements Action {
  public readonly type = EStatementActions.GetStatement;

  constructor(public payload: string) {
  }
}

export class GetStatementSuccess implements Action {
  public readonly type = EStatementActions.GetStatementSuccess;

  constructor(public payload: Statement) {
  }
}

export class GetStatementError implements Action {
  public readonly type = EStatementActions.GetStatementError;

  constructor(public payload: Statement) {
  }
}

export class AddStatement implements Action {
  public readonly type = EStatementActions.AddStatement;

  constructor(public payload: string) {
  }
}

export class AddStatementSuccess implements Action {
  public readonly type = EStatementActions.AddStatementSuccess;

  constructor(public payload: Statement) {
  }
}

export class AddStatementError implements Action {
  public readonly type = EStatementActions.AddStatementError;

  constructor(public payload: Statement) {
  }
}

export class UpdateStatement implements Action {
  public readonly type = EStatementActions.UpdateStatement;

  constructor(public payload: string) {
  }
}

export class UpdateStatementSuccess implements Action {
  public readonly type = EStatementActions.UpdateStatementSuccess;

  constructor(public payload: Statement) {
  }
}

export class UpdateStatementError implements Action {
  public readonly type = EStatementActions.UpdateStatementError;

  constructor(public payload: Statement) {
  }
}

export class RemoveStatement implements Action {
  public readonly type = EStatementActions.RemoveStatement;

  constructor(public payload: string) {
  }
}

export class RemoveStatementSuccess implements Action {
  public readonly type = EStatementActions.RemoveStatementSuccess;

  constructor(public payload: Statement) {
  }
}

export class RemoveStatementError implements Action {
  public readonly type = EStatementActions.RemoveStatementError;

  constructor(public payload: Statement) {
  }
}

export type StatementActions =
  | GetStatements
  | GetStatementsSuccess
  | GetStatementsError
  | GetStatement
  | GetStatementSuccess
  | GetStatementError
  | AddStatement
  | AddStatementSuccess
  | AddStatementError
  | UpdateStatement
  | UpdateStatementSuccess
  | UpdateStatementError
  | RemoveStatement
  | RemoveStatementSuccess
  | RemoveStatementError;

export class SetSubmittedStatementAction implements Action {
  static readonly TYPE = '[Statement Form] Set Statement';
  readonly type = SetSubmittedStatementAction.TYPE;

  constructor(public submittedValue: Statement) {
  }
}
