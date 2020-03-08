import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { required, requiredTrue } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { initialVariableFormState } from '../state/variable.form.state';
import { SetSubmittedVariableAction } from '../actions/variable.form.action';
import { Variable } from '../../models/variable';
import { AppState } from '../state/app.state';

const validationFormGroupReducer = createFormStateReducerWithUpdate<Variable>(
  updateGroup<Variable>({
    id: validate(required),
    name: validate(required),
    isRequested: validate(required)
  })
);

const reducers = combineReducers<AppState['variableForms'], any>({
  formState(s = initialVariableFormState, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: Variable | undefined, a: SetSubmittedVariableAction) {
    if (a.type === SetSubmittedVariableAction.TYPE) {
      return a.submittedValue;
    } else {
      return s;
    }
  }
});

export function variablesFormReducer(s: AppState['variableForms'], a: Action) {
  return reducers(s, a);
}
