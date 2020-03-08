import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { VariableState } from '../state/variable.state';

const selectVariables = (state: AppState) => state.variables;

export const selectVariableList = createSelector(
  selectVariables,
  (state: VariableState) => state.variables
);

export const selectSelectedVariable = createSelector(
  selectVariables,
  (state: VariableState) => state.selectedVariable
);
