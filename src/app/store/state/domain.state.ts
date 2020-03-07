import { Domain } from '../../models/domain';

export interface IDomainState {
  domains: Domain[];
  selectedDomain: Domain;
}

export const initialDomainState: IDomainState = {
  domains: null,
  selectedDomain: null
};
