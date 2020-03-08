import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { StatementFormState, initialStatementFormState } from '../state/statement.form.state';
import { SetSubmittedStatementAction } from '../actions/statement.form.action';
import { Statement } from '../../models/statement';

const validationFormGroupReducer = createFormStateReducerWithUpdate<Statement>(
  updateGroup<Statement>({
    id: validate(required),
    name: validate(required)
  })
);

const reducers = combineReducers<StatementFormState['material'], any>({
  formState(s = initialStatementFormState, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: Statement | undefined, a: SetSubmittedStatementAction) {
    if (a.type === SetSubmittedStatementAction.TYPE) {
      return a.submittedValue;
    } else {
      return s;
    }
  }
});

export function statementsFormReducer(s: StatementFormState['material'], a: Action) {
  return reducers(s, a);
}
