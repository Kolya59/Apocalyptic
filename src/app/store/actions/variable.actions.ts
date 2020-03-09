import { Action } from '@ngrx/store';

import { Variable } from '../../models/variable';

export enum EVariableActions {
  GetVariables = '[Variable] Get Variables',
  GetVariablesSuccess = '[Variable] Get Variables Success',
  GetVariablesError = '[Variable] Get Variables Error',
  GetVariable = '[Variable] Get Variable',
  SetSelectedVariable = '[Variable] Set Selected Variable',
  GetVariableSuccess = '[Variable] Get Variable Success',
  GetVariableError = '[Variable] Get Variable Error',
  AddVariable = '[Variable] Add Variable',
  AddVariableSuccess = '[Variable] Add Variable Success',
  AddVariableError = '[Variable] Add Variable Error',
  UpdateVariable = '[Variable] Update Variable',
  UpdateVariableSuccess = '[Variable] Update Variable Success',
  UpdateVariableError = '[Variable] Update Variable Error',
  RemoveVariable = '[Variable] Remove',
  RemoveVariableSuccess = '[Variable] Remove Variable Success',
  RemoveVariableError = '[Variable] Remove VariableErrors',
  ReorderVariables = '[Variable] Reorder Variables'
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

export class SetSelectedVariable implements Action {
  public readonly type = EVariableActions.SetSelectedVariable;

  constructor(public payload: string) {
  }
}

export class AddVariable implements Action {
  public readonly type = EVariableActions.AddVariable;

  constructor(public payload: Variable) {
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

export type VariableActions =
  | GetVariables
  | GetVariable
  | SetSelectedVariable
  | AddVariable
  | UpdateVariable
  | RemoveVariable
  | ReorderVariables;

export class SetSubmittedVariableAction implements Action {
  static readonly TYPE = '[Variable Form] Set Variable';
  readonly type = SetSubmittedVariableAction.TYPE;

  constructor(public submittedValue: Variable) {
  }
}
