import { EVariableActions, SetSubmittedVariableAction, VariableActions } from '../actions/variable.actions';
import { initialVariableFormState, initialVariableListState, VariableFormState, VariableListState } from '../state/variable.state';
import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Variable } from '../../models/variable';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Service } from '../../services/core.service';
import { v4 } from 'uuid';

export const variableReducers = (state = initialVariableListState, action: VariableActions): VariableListState => {
  switch (action.type) {
    case EVariableActions.GetVariables: {
      return {
        ...state
      };
    }

    case EVariableActions.GetVariable: {
      return {
        ...state
      };
    }

    case EVariableActions.SetSelectedVariable: {
      return {
        ...state,
        selectedVariable: state.variables.find(next => next.id === action.payload)
      };
    }

    case EVariableActions.AddVariable: {
      return {
        variables: [...state.variables, { ...action.payload, id: v4() }],
        selectedVariable: state.selectedVariable
      };
    }

    case EVariableActions.UpdateVariable: {
      return {
        variables: state.variables.map(next => (next.id === action.payload.id ? action.payload : next)),
        selectedVariable: state.selectedVariable
      };
    }

    case EVariableActions.RemoveVariable: {
      return {
        variables: state.variables.filter(next => next.id !== action.payload),
        selectedVariable: state.selectedVariable
      };
    }

    case EVariableActions.ReorderVariables: {
      return {
        variables: Service.reorder(action.payload.sourceID, action.payload.targetID, state.variables),
        selectedVariable: state.selectedVariable
      };
    }

    default:
      return state;
  }
};

const validationFormGroupReducer = createFormStateReducerWithUpdate<Variable>(
  updateGroup<Variable>({
    id: validate(required),
    name: validate(required)
  })
);

const reducers = combineReducers<VariableFormState['variableForm'], any>({
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

export function variablesFormReducer(s: AppState['variableForm'], a: Action) {
  return reducers(s, a);
}
