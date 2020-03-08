import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { TargetState } from '../state/target.state';

const selectTarget = (state: AppState) => state.target;

export const selectSelectedTarget = createSelector(
  selectTarget,
  (state: TargetState) => state.selectedTarget
);
