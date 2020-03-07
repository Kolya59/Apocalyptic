import { RouterReducerState } from '@ngrx/router-store';

import { IDomainState, initialDomainState } from './domain.state';
import { initialRuleState, IRuleState } from './rule.state';
import { initialStatementState, IStatementState } from './statement.state';
import { initialVariableState, IVariableState } from './variable.state';

export interface IAppState {
  router?: RouterReducerState;
  domains: IDomainState;
  rules: IRuleState;
  statements: IStatementState;
  variables: IVariableState;
}

export const initialAppState: IAppState = {
  domains: initialDomainState,
  rules: initialRuleState,
  statements: initialStatementState,
  variables: initialVariableState
};

export function getInitialState(): IAppState {
  return initialAppState;
}