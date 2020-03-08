import { ERuleActions, RuleActions } from '../actions/rule.actions';
import { initialRuleState, RuleState } from '../state/rule.state';

export const ruleReducers = (state = initialRuleState, action: RuleActions): RuleState => {
  switch (action.type) {
    case ERuleActions.GetRulesSuccess: {
      return {
        ...state,
        rules: action.payload
      };
    }

    case ERuleActions.GetRuleSuccess: {
      return {
        ...state,
        selectedRule: action.payload
      };
    }

    case ERuleActions.AddRule: {
      return {
        rules: [action.payload],
        selectedRule: state.selectedRule
      };
    }

    case ERuleActions.UpdateRuleSuccess: {
      return {
        ...state
      };
    }

    case ERuleActions.RemoveRuleSuccess: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
