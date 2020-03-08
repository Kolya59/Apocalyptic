import { EDomainActions, DomainActions } from '../actions/domain.actions';
import { initialDomainState, DomainState } from '../state/domain.state';

export const domainReducers = (
  state = initialDomainState,
  action: DomainActions
): DomainState => {
  switch (action.type) {
    case EDomainActions.GetDomainsSuccess: {
      return {
        ...state,
        domains: action.payload
      };
    }

    case EDomainActions.GetDomainSuccess: {
      return {
        ...state,
        selectedDomain: action.payload
      };
    }

    default:
      return state;
  }
};
