import { IDomain } from '../../models/domain';

export interface IDomainState {
  domains: IDomain[];
  selectedDomain: IDomain;
}

export const initialDomainState: IDomainState = {
  domains: null,
  selectedDomain: null
};
