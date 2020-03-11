import { Action } from '@ngrx/store';

import { Statement } from '../../models/statement';

export enum EStatementActions {
  GetStatements = '[Statement] Get Statements',
  GetStatement = '[Statement] Get Statement',
  AddStatement = '[Statement] Add Statement',
  UpdateStatement = '[Statement] Update Statement',
  RemoveStatement = '[Statement] Remove',
  ReorderStatement = '[Statement] Reorder'
}

export class GetStatements implements Action {
  public readonly type = EStatementActions.GetStatements;
}

export class GetStatement implements Action {
  public readonly type = EStatementActions.GetStatement;

  constructor(public payload: string) {
  }
}

export class AddStatement implements Action {
  public readonly type = EStatementActions.AddStatement;

  constructor(public payload: string) {
  }
}

export class UpdateStatement implements Action {
  public readonly type = EStatementActions.UpdateStatement;

  constructor(public payload: Statement) {
  }
}

export class RemoveStatement implements Action {
  public readonly type = EStatementActions.RemoveStatement;

  constructor(public payload: string) {
  }
}

export class ReorderStatements implements Action {
  public readonly type = EStatementActions.ReorderStatement;

  constructor(public payload: { sourceID: number; targetID: number }) {
  }
}

export type StatementActions = GetStatements | GetStatement | AddStatement | UpdateStatement | RemoveStatement | ReorderStatements;

export class SetSubmittedStatementAction implements Action {
  static readonly TYPE = '[Statement Form] Set Statement';
  readonly type = SetSubmittedStatementAction.TYPE;

  constructor(public submittedValue: Statement) {
  }
}
