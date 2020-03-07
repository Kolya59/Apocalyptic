import { Action } from '@ngrx/store';

import { IVariable } from '../../models/variable';

export enum EVariableActions {
  GetVariables = '[Variable] Get Variables',
  GetVariablesSuccess = '[Variable] Get Variables Success',
  GetVariablesError = '[Variable] Get Variables Error',
  GetVariable = '[Variable] Get Variable',
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
  RemoveVariableError = '[Variable] Remove VariableErrors'
}

export class GetVariables implements Action {
  public readonly type = EVariableActions.GetVariables;
}

export class GetVariablesSuccess implements Action {
  public readonly type = EVariableActions.GetVariablesSuccess;

  constructor(public payload: IVariable[]) {
  }
}

export class GetVariablesError implements Action {
  public readonly type = EVariableActions.GetVariablesError;

  constructor(public payload: IVariable[]) {
  }
}

export class GetVariable implements Action {
  public readonly type = EVariableActions.GetVariable;

  constructor(public payload: string) {
  }
}

export class GetVariableSuccess implements Action {
  public readonly type = EVariableActions.GetVariableSuccess;

  constructor(public payload: IVariable) {
  }
}

export class GetVariableError implements Action {
  public readonly type = EVariableActions.GetVariableError;

  constructor(public payload: IVariable) {
  }
}

export class AddVariable implements Action {
  public readonly type = EVariableActions.AddVariable;

  constructor(public payload: string) {
  }
}

export class AddVariableSuccess implements Action {
  public readonly type = EVariableActions.AddVariableSuccess;

  constructor(public payload: IVariable) {
  }
}

export class AddVariableError implements Action {
  public readonly type = EVariableActions.AddVariableError;

  constructor(public payload: IVariable) {
  }
}

export class UpdateVariable implements Action {
  public readonly type = EVariableActions.UpdateVariable;

  constructor(public payload: string) {
  }
}

export class UpdateVariableSuccess implements Action {
  public readonly type = EVariableActions.UpdateVariableSuccess;

  constructor(public payload: IVariable) {
  }
}

export class UpdateVariableError implements Action {
  public readonly type = EVariableActions.UpdateVariableError;

  constructor(public payload: IVariable) {
  }
}

export class RemoveVariable implements Action {
  public readonly type = EVariableActions.RemoveVariable;

  constructor(public payload: string) {
  }
}

export class RemoveVariableSuccess implements Action {
  public readonly type = EVariableActions.RemoveVariableSuccess;

  constructor(public payload: IVariable) {
  }
}

export class RemoveVariableError implements Action {
  public readonly type = EVariableActions.RemoveVariableError;

  constructor(public payload: IVariable) {
  }
}

export type VariableActions =
  | GetVariables
  | GetVariablesSuccess
  | GetVariablesError
  | GetVariable
  | GetVariableSuccess
  | GetVariableError
  | AddVariable
  | AddVariableSuccess
  | AddVariableError
  | UpdateVariable
  | UpdateVariableSuccess
  | UpdateVariableError
  | RemoveVariable
  | RemoveVariableSuccess
  | RemoveVariableError;
