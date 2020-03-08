import { Rule } from '../../models/rule';

export interface RuleState {
  rules: Rule[];
  selectedRule: Rule;
}

export const initialRuleState: RuleState = {
  rules: null,
  selectedRule: null
};
