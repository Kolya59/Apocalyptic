import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { RuleState } from '../state/rule.state';

const selectRules = (state: AppState) => state.rules;

export const selectRuleList = createSelector(
  selectRules,
  (state: RuleState) => state.rules
);

export const selectSelectedRule = createSelector(
  selectRules,
  (state: RuleState) => state.selectedRule
);
