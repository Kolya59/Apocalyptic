import { RouterReducerState } from '@ngrx/router-store';

import { initialRuleFormState, initialRuleListState, RuleListState } from './rule.state';
import { initialStatementFormState, initialStatementState, StatementState } from './statement.state';
import { initialVariableFormState, initialVariableListState, VariableListState } from './variable.state';
import { initialTargetState, TargetState } from './target.state';
import { FormGroupState } from 'ngrx-forms';
import { Rule } from '../../models/rule';
import { Statement } from '../../models/statement';
import { Variable } from '../../models/variable';

export interface AppState {
  router?: RouterReducerState;
  rules: RuleListState;
  statements: StatementState;
  variables: VariableListState;
  target?: TargetState;
  ruleForm: {
    formState: FormGroupState<Rule>;
    submittedValue: Rule | undefined;
  };
  statementForm: {
    formState: FormGroupState<Statement>;
    submittedValue: Statement | undefined;
  };
  variableForm: {
    formState: FormGroupState<Variable>;
    submittedValue: Variable | undefined;
  };
}

export const initialAppState: AppState = {
  ruleForm: { formState: initialRuleFormState, submittedValue: undefined },
  statementForm: { formState: initialStatementFormState, submittedValue: undefined },
  variableForm: { formState: initialVariableFormState, submittedValue: undefined },
  rules: initialRuleListState,
  statements: initialStatementState,
  variables: initialVariableListState,
  target: initialTargetState
};

export function getInitialState(): AppState {
  return initialAppState;
}
