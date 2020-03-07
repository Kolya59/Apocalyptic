import { Rule } from '../../models/rule';

export interface IRuleState {
  rules: Rule[];
  selectedRule: Rule;
}

export const initialRuleState: IRuleState = {
  rules: null,
  selectedRule: null
};
