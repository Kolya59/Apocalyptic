import { Action } from '@ngrx/store';

import { Rule } from '../../models/rule';

export enum ERuleActions {
  GetRules = '[Rule] Get Rules',
  GetRule = '[Rule] Get Rule',
  AddRule = '[Rule] Add Rule',
  UpdateRule = '[Rule] Update Rule',
  RemoveRule = '[Rule] Remove',
  ReorderRule = '[Rule] Reorder'
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

  constructor(public payload: string) {
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
