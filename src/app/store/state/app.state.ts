import { RouterReducerState } from '@ngrx/router-store';

import { initialRulesState, RuleFormState } from './rule.state';
import { initialStatementsState, StatementFormState } from './statement.state';
import { initialVariablesState, VariableFormState } from './variable.state';
import { initialTargetState, TargetState } from './target.state';

export interface AppState {
  router?: RouterReducerState;
  rules: RuleFormState[];
  statements: StatementFormState[];
  variables: VariableFormState[];
  target?: TargetState;
}

export const initialAppState: AppState = {
  rules: initialRulesState,
  statements: initialStatementsState,
  variables: initialVariablesState,
  target: initialTargetState
};

export function getInitialState(): AppState {
  return initialAppState;
}
