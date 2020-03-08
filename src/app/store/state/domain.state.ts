import { Domain } from '../../models/domain';

export interface DomainState {
  domains: Domain[];
  selectedDomain: Domain;
}

export const initialDomainState: DomainState = {
  domains: null,
  selectedDomain: null
};
