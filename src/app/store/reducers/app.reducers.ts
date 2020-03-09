import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { ruleReducers, rulesFormReducer } from './rule.reducers';
import { statementReducers, statementsFormReducer } from './statement.reducers';
import { variableReducers, variablesFormReducer } from './variable.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  ruleForm: rulesFormReducer,
  statementForm: statementsFormReducer,
  variableForm: variablesFormReducer,
  router: routerReducer,
  rules: ruleReducers,
  statements: statementReducers,
  variables: variableReducers
};
