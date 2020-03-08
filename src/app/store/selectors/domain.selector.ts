import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { DomainState } from '../state/domain.state';

const selectDomains = (state: AppState) => state.domains;

export const selectDomainList = createSelector(selectDomains, (state: DomainState) => state.domains);

export const selectSelectedDomain = createSelector(selectDomains, (state: DomainState) => state.selectedDomain);
