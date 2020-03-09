import { Rule } from '../../models/rule';
import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';

export const initialRuleState: Rule = { conclusions: [], description: '', id: '', name: 'New Rule', premises: [] };

export interface RuleListState {
  rules: Rule[];
  selectedRule: Rule;
}

export const initialRuleListState: RuleListState = {
  rules: [],
  selectedRule: null
};

export interface RuleFormState extends AppState {
  ruleForm: {
    formState: FormGroupState<Rule>;
    submittedValue: Rule | undefined;
  };
}

export const initialRuleFormState = createFormGroupState<Rule>('ruleForm', initialRuleState);
