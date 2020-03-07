import { Action } from '@ngrx/store';

import { IVariable } from '../../models/variable';

export enum EVariableActions {
  GetVariables = '[Variable] Get Variables',
  GetVariablesSuccess = '[Variable] Get Variables Success',
  GetVariable = '[Variable] Get Variable',
  GetVariableSuccess = '[Variable] Get Variable Success'
}

export class GetVariables implements Action {
  public readonly type = EVariableActions.GetVariables;
}

export class GetVariablesSuccess implements Action {
  public readonly type = EVariableActions.GetVariablesSuccess;
  constructor(public payload: IVariable[]) {}
}

export class GetVariable implements Action {
  public readonly type = EVariableActions.GetVariable;
  constructor(public payload: string) {}
}

export class GetVariableSuccess implements Action {
  public readonly type = EVariableActions.GetVariableSuccess;
  constructor(public payload: IVariable) {}
}

export type VariableActions =
  | GetVariables
  | GetVariablesSuccess
  | GetVariable
  | GetVariableSuccess;
