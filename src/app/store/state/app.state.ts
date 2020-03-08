import { RouterReducerState } from '@ngrx/router-store';

import { DomainState, initialDomainState } from './domain.state';
import { initialRuleState, RuleState } from './rule.state';
import { initialStatementState, StatementState } from './statement.state';
import { initialVariableState, VariableState } from './variable.state';
import { initialTargetState, TargetState } from './target.state';

export interface AppState {
  router?: RouterReducerState;
  domains: DomainState;
  rules: RuleState;
  statements: StatementState;
  variables: VariableState;
  target?: TargetState;
}

export const initialAppState: AppState = {
  domains: initialDomainState,
  rules: initialRuleState,
  statements: initialStatementState,
  variables: initialVariableState,
  target: initialTargetState
};

export function getInitialState(): AppState {
  return initialAppState;
}
