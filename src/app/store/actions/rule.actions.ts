import { Action } from '@ngrx/store';

import { IRule } from '../../models/rule';

export enum ERuleActions {
  GetRules = '[Rule] Get Rules',
  GetRulesSuccess = '[Rule] Get Rules Success',
  GetRulesError = '[Rule] Get Rules Error',
  GetRule = '[Rule] Get Rule',
  GetRuleSuccess = '[Rule] Get Rule Success',
  GetRuleError = '[Rule] Get Rule Error',
  AddRule = '[Rule] Add Rule',
  AddRuleSuccess = '[Rule] Add Rule Success',
  AddRuleError = '[Rule] Add Rule Error',
  UpdateRule = '[Rule] Update Rule',
  UpdateRuleSuccess = '[Rule] Update Rule Success',
  UpdateRuleError = '[Rule] Update Rule Error',
  RemoveRule = '[Rule] Remove',
  RemoveRuleSuccess = '[Rule] Remove Rule Success',
  RemoveRuleError = '[Rule] Remove RuleErrors'
}

export class GetRules implements Action {
  public readonly type = ERuleActions.GetRules;
}

export class GetRulesSuccess implements Action {
  public readonly type = ERuleActions.GetRulesSuccess;

  constructor(public payload: IRule[]) {
  }
}

export class GetRulesError implements Action {
  public readonly type = ERuleActions.GetRulesError;

  constructor(public payload: IRule[]) {
  }
}

export class GetRule implements Action {
  public readonly type = ERuleActions.GetRule;

  constructor(public payload: string) {
  }
}

export class GetRuleSuccess implements Action {
  public readonly type = ERuleActions.GetRuleSuccess;

  constructor(public payload: IRule) {
  }
}

export class GetRuleError implements Action {
  public readonly type = ERuleActions.GetRuleError;

  constructor(public payload: IRule) {
  }
}

export class AddRule implements Action {
  public readonly type = ERuleActions.AddRule;

  constructor(public payload: string) {
  }
}

export class AddRuleSuccess implements Action {
  public readonly type = ERuleActions.AddRuleSuccess;

  constructor(public payload: IRule) {
  }
}

export class AddRuleError implements Action {
  public readonly type = ERuleActions.AddRuleError;

  constructor(public payload: IRule) {
  }
}

export class UpdateRule implements Action {
  public readonly type = ERuleActions.UpdateRule;

  constructor(public payload: string) {
  }
}

export class UpdateRuleSuccess implements Action {
  public readonly type = ERuleActions.UpdateRuleSuccess;

  constructor(public payload: IRule) {
  }
}

export class UpdateRuleError implements Action {
  public readonly type = ERuleActions.UpdateRuleError;

  constructor(public payload: IRule) {
  }
}

export class RemoveRule implements Action {
  public readonly type = ERuleActions.RemoveRule;

  constructor(public payload: string) {
  }
}

export class RemoveRuleSuccess implements Action {
  public readonly type = ERuleActions.RemoveRuleSuccess;

  constructor(public payload: IRule) {
  }
}

export class RemoveRuleError implements Action {
  public readonly type = ERuleActions.RemoveRuleError;

  constructor(public payload: IRule) {
  }
}

export type RuleActions =
  | GetRules
  | GetRulesSuccess
  | GetRulesError
  | GetRule
  | GetRuleSuccess
  | GetRuleError
  | AddRule
  | AddRuleSuccess
  | AddRuleError
  | UpdateRule
  | UpdateRuleSuccess
  | UpdateRuleError
  | RemoveRule
  | RemoveRuleSuccess
  | RemoveRuleError;
