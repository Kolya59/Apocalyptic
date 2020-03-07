import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITargetState } from '../state/target.state';

const selectTarget = (state: IAppState) => state.target;

export const selectSelectedTarget = createSelector(
  selectTarget,
  (state: ITargetState) => state.selectedTarget
);
