import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { RuleListState } from '../state/rule.state';

const selectRules = (state: AppState) => state.rules;

export const selectRuleList = createSelector(selectRules, (state: RuleListState) => state.rules);

export const selectSelectedRule = createSelector(selectRules, (state: RuleListState) => state.selectedRule);
