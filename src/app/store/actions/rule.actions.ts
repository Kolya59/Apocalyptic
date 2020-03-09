import { Action } from '@ngrx/store';

import { Rule } from '../../models/rule';

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
  RemoveRuleError = '[Rule] Remove Rule Error',
  ReorderRule = '[Rule] Reorder',
  ReorderRuleSuccess = '[Rule] Reorder Rule Success',
  ReorderRuleError = '[Rule] Reorder Rule Error'
}

export class GetRules implements Action {
  public readonly type = ERuleActions.GetRules;
}

export class GetRule implements Action {
  public readonly type = ERuleActions.GetRule;

  constructor(public payload: string) {
  }
}

export class AddRule implements Action {
  public readonly type = ERuleActions.AddRule;

  constructor(public payload: Rule) {
  }
}

export class UpdateRule implements Action {
  public readonly type = ERuleActions.UpdateRule;

  constructor(public payload: Rule) {
  }
}

export class RemoveRule implements Action {
  public readonly type = ERuleActions.RemoveRule;

  constructor(public payload: string) {
  }
}

export class ReorderRules implements Action {
  public readonly type = ERuleActions.ReorderRule;

  constructor(public payload: { sourceID: number; targetID: number }) {
  }
}

export type RuleActions = GetRules | GetRule | AddRule | UpdateRule | RemoveRule | ReorderRules;

export class SetSubmittedRuleAction implements Action {
  static readonly TYPE = '[Rule Form] Set Rule';
  readonly type = SetSubmittedRuleAction.TYPE;

  constructor(public submittedValue: Rule) {
  }
}
