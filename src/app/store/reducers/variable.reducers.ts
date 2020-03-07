import { EVariableActions, VariableActions } from '../actions/variable.actions';
import { initialVariableState, IVariableState } from '../state/variable.state';

export const variableReducers = (
  state = initialVariableState,
  action: VariableActions
): IVariableState => {
  switch (action.type) {
    case EVariableActions.GetVariablesSuccess: {
      return {
        ...state,
        variables: action.payload
      };
    }

    case EVariableActions.GetVariableSuccess: {
      return {
        ...state,
        selectedVariable: action.payload
      };
    }

    default:
      return state;
  }
};
