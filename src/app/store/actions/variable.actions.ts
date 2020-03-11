import { Action } from '@ngrx/store';

import { Variable } from '../../models/variable';

export enum EVariableActions {
  GetVariables = '[Variable] Get Variables',
  GetVariable = '[Variable] Get Variable',
  AddVariable = '[Variable] Add Variable',
  UpdateVariable = '[Variable] Update Variable',
  RemoveVariable = '[Variable] Remove',
  ReorderVariables = '[Variable] Reorder Variables',
  SetSubmittedVariableAction = '[Variable Form] Set Variable'
}

export class GetVariables implements Action {
  public readonly type = EVariableActions.GetVariables;

  constructor(public payload: Variable[]) {
  }
}

export class GetVariable implements Action {
  public readonly type = EVariableActions.GetVariable;

  constructor(public payload: string) {
  }
}

export class AddVariable implements Action {
  public readonly type = EVariableActions.AddVariable;

  constructor(public payload: string) {
  }
}

export class UpdateVariable implements Action {
  public readonly type = EVariableActions.UpdateVariable;

  constructor(public payload: Variable) {
  }
}

export class RemoveVariable implements Action {
  public readonly type = EVariableActions.RemoveVariable;

  constructor(public payload: string) {
  }
}

export class ReorderVariables implements Action {
  public readonly type = EVariableActions.ReorderVariables;

  constructor(public payload: { sourceID: number; targetID: number }) {
  }
}

export class SetSubmittedVariableAction implements Action {
  readonly type = EVariableActions.SetSubmittedVariableAction;

  constructor(public submittedValue: Variable) {
  }
}

export type VariableActions =
  | GetVariables
  | GetVariable
  | AddVariable
  | UpdateVariable
  | RemoveVariable
  | ReorderVariables
  | SetSubmittedVariableAction;
