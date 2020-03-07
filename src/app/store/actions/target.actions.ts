import { Action } from '@ngrx/store';
import { Variable } from '../../models/variable';

export enum ETargetActions {
  GetTarget = '[Target] Get Target',
  GetTargetSuccess = '[Target] Get Target Success',
  GetTargetError = '[Target] Get Target Error',
  SetTarget = '[Target] Set Target',
  SetTargetSuccess = '[Target] Set Target Success',
  SetTargetError = '[Target] Set Target Error'
}

export class GetTarget implements Action {
  public readonly type = ETargetActions.GetTarget;

  constructor() {
  }
}

export class GetTargetSuccess implements Action {
  public readonly type = ETargetActions.GetTargetSuccess;

  constructor(public payload: Variable) {
  }
}

export class GetTargetError implements Action {
  public readonly type = ETargetActions.GetTargetError;

  constructor(public payload: Variable) {
  }
}

export class SetTarget implements Action {
  public readonly type = ETargetActions.SetTarget;

  constructor(public payload: string) {
  }
}

export class SetTargetSuccess implements Action {
  public readonly type = ETargetActions.SetTargetSuccess;

  constructor(public payload: Variable) {
  }
}

export class SetTargetError implements Action {
  public readonly type = ETargetActions.SetTargetError;

  constructor(public payload: Variable) {
  }
}

export type TargetActions = GetTarget | GetTargetSuccess | GetTargetError | SetTarget | SetTargetSuccess | SetTargetError;
