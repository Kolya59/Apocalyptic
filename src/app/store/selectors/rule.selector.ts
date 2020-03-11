import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';

const selectRules = (state: AppState) => state.rules;

export const selectRuleList = createSelector(selectRules, state =>
  state
    ? state
      .map(next => next.formState.controls)
      .map(next => ({
        id: next.id.value,
        name: next.name.value,
        description: next.description.value,
        conclusions: next.conclusions.value,
        premises: next.premises.value
      }))
    : []
);
