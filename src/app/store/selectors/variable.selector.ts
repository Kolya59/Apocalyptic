import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { VariableListState } from '../state/variable.state';

const selectVariables = (state: AppState) => state.variables;

export const selectVariableList = createSelector(selectVariables, (state: VariableListState) => state.variables);

export const selectSelectedVariable = createSelector(selectVariables, (state: VariableListState) => state.selectedVariable);

export function selectVariable(id: string) {
  return createSelector(selectVariables, (state: VariableListState) => state.variables.find(next => next.id === id));
}
