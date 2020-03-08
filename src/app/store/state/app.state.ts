import { RouterReducerState } from '@ngrx/router-store';

import { DomainState, initialDomainsState } from './domain.state';
import { initialRuleState, RuleState } from './rule.state';
import { initialStatementState, StatementState } from './statement.state';
import { initialVariableState, VariableState } from './variable.state';
import { initialTargetState, TargetState } from './target.state';
import { FormGroupState } from 'ngrx-forms';
import { Domain } from '../../models/domain';
import { initialRuleFormState } from './rule.form.state';
import { Rule } from '../../models/rule';
import { Statement } from '../../models/statement';
import { Variable } from '../../models/variable';
import { initialDomainFormState } from './domain.form.state';
import { initialVariableFormState } from './variable.form.state';
import { initialStatementFormState } from './statement.form.state';

export interface AppState {
  router?: RouterReducerState;
  domains: DomainState;
  rules: RuleState;
  statements: StatementState;
  variables: VariableState;
  target?: TargetState;
  domainForms: {
    formState: FormGroupState<Domain>;
    submittedValue: Domain | undefined;
  };
  ruleForms: {
    formState: FormGroupState<Rule>;
    submittedValue: Rule | undefined;
  };
  statementForms: {
    formState: FormGroupState<Statement>;
    submittedValue: Statement | undefined;
  };
  variableForms: {
    formState: FormGroupState<Variable>;
    submittedValue: Variable | undefined;
  };
}

export const initialAppState: AppState = {
  domainForms: { formState: initialDomainFormState, submittedValue: undefined },
  ruleForms: { formState: initialRuleFormState, submittedValue: undefined },
  statementForms: { formState: initialStatementFormState, submittedValue: undefined },
  variableForms: { formState: initialVariableFormState, submittedValue: undefined },
  domains: initialDomainsState,
  rules: initialRuleState,
  statements: initialStatementState,
  variables: initialVariableState,
  target: initialTargetState
};

export function getInitialState(): AppState {
  return initialAppState;
}
