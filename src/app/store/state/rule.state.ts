import { IRule } from '../../models/rule';

export interface IRuleState {
  rules: IRule[];
  selectedRule: IRule;
}

export const initialRuleState: IRuleState = {
  rules: null,
  selectedRule: null
};
