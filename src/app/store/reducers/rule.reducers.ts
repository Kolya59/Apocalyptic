import { ERuleActions, RuleActions, SetSubmittedRuleAction } from '../actions/rule.actions';
import { initialRuleFormState, initialRuleListState, RuleFormState, RuleListState } from '../state/rule.state';
import { Service } from '../../services/core.service';
import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { Rule } from '../../models/rule';
import { required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { v4 } from 'uuid';

export const ruleReducers = (state = initialRuleListState, action: RuleActions): RuleListState => {
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
        rules: [...state.rules, { ...action.payload, id: v4() }],
        selectedRule: state.selectedRule
      };
    }

    case ERuleActions.UpdateRule: {
      return {
        rules: state.rules.map(next => (next.id === action.payload.id ? action.payload : next)),
        selectedRule: state.selectedRule
      };
    }

    case ERuleActions.RemoveRule: {
      return {
        rules: state.rules.filter(next => next.id !== action.payload),
        selectedRule: state.selectedRule
      };
    }

    case ERuleActions.ReorderRule: {
      return {
        rules: Service.reorder(action.payload.sourceID, action.payload.targetID, state.rules),
        selectedRule: state.selectedRule
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

const reducers = combineReducers<RuleFormState['ruleForm'], any>({
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

export function rulesFormReducer(s: RuleFormState['ruleForm'], a: Action) {
  return reducers(s, a);
}
