import { Action } from '@ngrx/store';
import { Variable } from '../../models/variable';

export enum EAppActions {
  GetApp = '[App] Get App',
  GetAppSuccess = '[App] Get App Success',
  GetAppError = '[App] Get App Error',
  SetApp = '[App] Set App',
  SetAppSuccess = '[App] Set App Success',
  SetAppError = '[App] Set App Error'
}

export class GetApp implements Action {
  public readonly type = EAppActions.GetApp;

  constructor() {
  }
}

export class GetAppSuccess implements Action {
  public readonly type = EAppActions.GetAppSuccess;

  constructor(public payload: Variable) {
  }
}

export class GetAppError implements Action {
  public readonly type = EAppActions.GetAppError;

  constructor(public payload: Variable) {
  }
}

export class SetApp implements Action {
  public readonly type = EAppActions.SetApp;

  constructor(public payload: string) {
  }
}

export class SetAppSuccess implements Action {
  public readonly type = EAppActions.SetAppSuccess;

  constructor(public payload: Variable) {
  }
}

export class SetAppError implements Action {
  public readonly type = EAppActions.SetAppError;

  constructor(public payload: Variable) {
  }
}

export type AppActions = GetApp | GetAppSuccess | GetAppError | SetApp | SetAppSuccess | SetAppError;
