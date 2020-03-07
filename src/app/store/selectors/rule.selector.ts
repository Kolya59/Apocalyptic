import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IRuleState } from '../state/rule.state';

const selectRules = (state: IAppState) => state.rules;

export const selectRuleList = createSelector(
  selectRules,
  (state: IRuleState) => state.rules
);

export const selectSelectedRule = createSelector(
  selectRules,
  (state: IRuleState) => state.selectedRule
);
