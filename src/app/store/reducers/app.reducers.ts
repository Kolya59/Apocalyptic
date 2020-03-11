import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { ruleReducers } from './rule.reducers';
import { statementReducers } from './statement.reducers';
import { variableReducers } from './variable.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  rules: ruleReducers,
  statements: statementReducers,
  variables: variableReducers
};
