import { Action } from '@ngrx/store';

import { IRule } from '../../models/rule';

export enum ERuleActions {
  GetRules = '[Rule] Get Rules',
  GetRulesSuccess = '[Rule] Get Rules Success',
  GetRule = '[Rule] Get Rule',
  GetRuleSuccess = '[Rule] Get Rule Success'
}

export class GetRules implements Action {
  public readonly type = ERuleActions.GetRules;
}

export class GetRulesSuccess implements Action {
  public readonly type = ERuleActions.GetRulesSuccess;
  constructor(public payload: IRule[]) {}
}

export class GetRule implements Action {
  public readonly type = ERuleActions.GetRule;
  constructor(public payload: string) {}
}

export class GetRuleSuccess implements Action {
  public readonly type = ERuleActions.GetRuleSuccess;
  constructor(public payload: IRule) {}
}

export type RuleActions =
  | GetRules
  | GetRulesSuccess
  | GetRule
  | GetRuleSuccess;
