import { EStatementActions, StatementActions } from '../actions/statement.actions';
import { initialStatementState, IStatementState } from '../state/statement.state';

export const statementReducers = (
  state = initialStatementState,
  action: StatementActions
): IStatementState => {
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
