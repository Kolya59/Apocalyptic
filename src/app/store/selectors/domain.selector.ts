import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IDomainState } from '../state/domain.state';

const selectDomains = (state: IAppState) => state.domains;

export const selectDomainList = createSelector(
  selectDomains,
  (state: IDomainState) => state.domains
);

export const selectSelectedDomain = createSelector(
  selectDomains,
  (state: IDomainState) => state.selectedDomain
);
