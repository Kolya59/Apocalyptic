import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';

const selectVariables = (state: AppState) => state.variables;

export const selectVariableList = createSelector(selectVariables, state =>
  state
    ? state
      .map(next => next.formState.controls)
      .map(next => ({
        id: next.id.value,
        name: next.name.value,
        domain: next.domain.value,
        description: next.description.value,
        isRequested: next.isRequested.value,
        requestedMsg: next.requestMsg.value
      }))
    : []
);
