import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IVariableState } from '../state/variable.state';

const selectVariables = (state: IAppState) => state.variables;

export const selectVariableList = createSelector(
  selectVariables,
  (state: IVariableState) => state.variables
);

export const selectSelectedVariable = createSelector(
  selectVariables,
  (state: IVariableState) => state.selectedVariable
);
