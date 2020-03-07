import { ERuleActions, RuleActions } from '../actions/rule.actions';
import { initialRuleState, IRuleState } from '../state/rule.state';

export const ruleReducers = (
  state = initialRuleState,
  action: RuleActions
): IRuleState => {
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

    default:
      return state;
  }
};
