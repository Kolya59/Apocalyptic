import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { domainReducers } from './domain.reducers';
import { ruleReducers } from './rule.reducers';
import { statementReducers } from './statement.reducers';
import { variableReducers } from './variable.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  domains: domainReducers,
  rules: ruleReducers,
  statements: statementReducers,
  variables: variableReducers
};
