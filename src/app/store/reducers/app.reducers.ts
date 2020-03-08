import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { domainReducers } from './domain.reducers';
import { ruleReducers } from './rule.reducers';
import { statementReducers } from './statement.reducers';
import { variableReducers } from './variable.reducers';
import { domainsFormReducer } from './domain.form.reducers';
import { rulesFormReducer } from './rule.form.reducers';
import { statementsFormReducer } from './statement.form.reducers';
import { variablesFormReducer } from './variable.form.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  domainForms: domainsFormReducer,
  ruleForms: rulesFormReducer,
  statementForms: statementsFormReducer,
  variableForms: variablesFormReducer,
  router: routerReducer,
  domains: domainReducers,
  rules: ruleReducers,
  statements: statementReducers,
  variables: variableReducers
};
