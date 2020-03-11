import { EStatementActions, SetSubmittedStatementAction, StatementActions } from '../actions/statement.actions';
import { StatementFormState, StatementsState } from '../state/statement.state';
import { createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Statement } from '../../models/statement';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { initialStatementState } from '../state/statement.state';
import { Service } from '../../services/core.service';

export const statementReducers = (state: StatementsState['statements'], action: StatementActions): StatementsState['statements'] => {
  switch (action.type) {
    case EStatementActions.GetStatements: {
      return {
        ...state
      };
    }

    case EStatementActions.GetStatement: {
      return {
        ...state
      };
    }

    case EStatementActions.AddStatement: {
      return [
        ...state,
        {
          formState: createFormGroupState<Statement>(action.payload, initialStatementState),
          submittedValue: undefined
        }
      ];
    }

    case EStatementActions.UpdateStatement: {
      // TODO Fix it
      return state.map(next =>
        next.formState.controls.id.value === action.payload.id
          ? { ...next, formState: { ...next.formState, controls: { ...next.formState.controls } } }
          : next
      );
    }

    case EStatementActions.RemoveStatement: {
      delete state[action.payload];
      return state;
    }

    case EStatementActions.ReorderStatement: {
      return Service.reorder(action.payload.sourceID, action.payload.targetID, state);
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

const reducers = combineReducers<StatementFormState, any>({
  formState(s, a: Action) {
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

export function statementsFormReducer(s: StatementFormState, a: Action) {
  return reducers(s, a);
}
