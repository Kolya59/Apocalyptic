import { Rule } from '../../models/rule';
import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';

export const initialRuleState: Rule = { conclusions: [], description: '', id: '', name: 'New Rule', premises: [] };

export interface RuleFormState {
  formState: FormGroupState<Rule>;
  submittedValue: Rule | undefined;
}

export interface RulesState extends AppState {
  rules: RuleFormState[];
}

export const initialRulesState = [];
