import { EStatementActions, SetSubmittedStatementAction, StatementActions } from '../actions/statement.actions';
import { initialStatementFormState, initialStatementState, StatementFormState, StatementState } from '../state/statement.state';
import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Statement } from '../../models/statement';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';

export const statementReducers = (state = initialStatementState, action: StatementActions): StatementState => {
  switch (action.type) {
    case EStatementActions.GetStatementsSuccess: {
      return {
        ...state,
        statements: action.payload
      };
    }

    case EStatementActions.GetStatementSuccess: {
      return {
        ...state,
        selectedStatement: action.payload
      };
    }

    default:
      return state;
  }
};

const validationFormGroupReducer = createFormStateReducerWithUpdate<Statement>(
  updateGroup<Statement>({
    id: validate(required),
    name: validate(required)
  })
);

const reducers = combineReducers<StatementFormState['statementForm'], any>({
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

export function statementsFormReducer(s: StatementFormState['statementForm'], a: Action) {
  return reducers(s, a);
}
