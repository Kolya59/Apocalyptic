import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { Rule } from '../../models/rule';
import { v4 } from 'uuid';

export interface RuleFormState extends AppState {
  material: {
    formState: FormGroupState<Rule>;
    submittedValue: Rule | undefined;
  };
}

export const initialRuleFormState = createFormGroupState<Rule>('material', {
  id: v4(),
  name: 'New rule',
  premises: [],
  conclusions: [],
  description: ''
});
