import { ERuleActions, RuleActions, SetSubmittedRuleAction } from '../actions/rule.actions';
import { initialRuleState, RuleFormState, RulesState } from '../state/rule.state';
import { Service } from '../../services/core.service';
import { createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Rule } from '../../models/rule';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';

export const ruleReducers = (state: RulesState, action: RuleActions): RulesState => {
  switch (action.type) {
    case ERuleActions.GetRules: {
      return {
        ...state
      };
    }

    case ERuleActions.GetRule: {
      return {
        ...state
      };
    }

    case ERuleActions.AddRule: {
      return {
        ...state,
        rules: [
          {
            formState: createFormGroupState<Rule>(action.payload, initialRuleState),
            submittedValue: undefined
          }
        ]
      };
    }

    case ERuleActions.UpdateRule: {
      // TODO Fix it
      return state.map(next =>
        next.formState.controls.id.value === action.payload.id
          ? { ...next, formState: { ...next.formState, controls: { ...next.formState.controls } } }
          : next
      );
    }

    case ERuleActions.RemoveRule: {
      delete state[action.payload];
      return state;
    }

    case ERuleActions.ReorderRule: {
      return {
        ...state,
        rules: Service.reorder(action.payload.sourceID, action.payload.targetID, state.rules)
      };
    }

    default:
      return state;
  }
};

const validationFormGroupReducer = createFormStateReducerWithUpdate<Rule>(
  updateGroup<Rule>({
    name: validate(required)
  })
);

const reducers = combineReducers<RuleFormState, any>({
  formState(s, a: Action) {
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

export function rulesFormReducer(s: RuleFormState, a: Action) {
  return reducers(s, a);
}
