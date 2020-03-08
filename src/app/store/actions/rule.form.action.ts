import { Action } from '@ngrx/store';
import { Rule } from '../../models/rule';

export class SetSubmittedRuleAction implements Action {
  static readonly TYPE = '[Rule Form] Set Rule';
  readonly type = SetSubmittedRuleAction.TYPE;

  constructor(public submittedValue: Rule) {
  }
}
