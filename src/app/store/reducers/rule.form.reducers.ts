import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers, State } from '@ngrx/store';
import { RuleFormState, initialRuleFormState } from '../state/rule.form.state';
import { SetSubmittedRuleAction } from '../actions/rule.form.action';
import { Rule } from '../../models/rule';

const validationFormGroupReducer = createFormStateReducerWithUpdate<Rule>(
  updateGroup<Rule>({
    id: validate(required),
    name: validate(required)
  })
);

const reducers = combineReducers<RuleFormState['material'], any>({
  formState(s = initialRuleFormState, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: Rule | undefined, a: SetSubmittedRuleAction) {
    if (a.type === SetSubmittedRuleAction.TYPE) {
      return a.submittedValue;
    } else {
      return s;
    }
  }
});

export function rulesFormReducer(s: RuleFormState['material'], a: Action) {
  return reducers(s, a);
}
