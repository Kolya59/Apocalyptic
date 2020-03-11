import { EVariableActions, SetSubmittedVariableAction, VariableActions } from '../actions/variable.actions';
import { initialVariableState, VariableFormState, VariablesState } from '../state/variable.state';
import { createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Variable } from '../../models/variable';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { Service } from '../../services/core.service';

export const variableReducers = (state: VariablesState['variables'], action: VariableActions): VariablesState['variables'] => {
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

    case EVariableActions.AddVariable: {
      return [
        ...state,
        {
          formState: createFormGroupState<Variable>(action.payload, initialVariableState),
          submittedValue: undefined
        }
      ];
    }

    case EVariableActions.UpdateVariable: {
      // TODO Fix it
      return state.map(next =>
        next.formState.controls.id.value === action.payload.id
          ? { ...next, formState: { ...next.formState, controls: { ...next.formState.controls } } }
          : next
      );
    }

    case EVariableActions.RemoveVariable: {
      delete state[action.payload];
      return state;
    }

    case EVariableActions.ReorderVariables: {
      return Service.reorder(action.payload.sourceID, action.payload.targetID, state);
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

const reducers = combineReducers<VariableFormState, any>({
  formState(s, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: Variable | undefined, a: SetSubmittedVariableAction) {
    if (a.type === EVariableActions.SetSubmittedVariableAction) {
      return a.submittedValue;
    } else {
      return s;
    }
  }
});

export function variablesFormReducer(s: VariableFormState, a: Action) {
  return reducers(s, a);
}
