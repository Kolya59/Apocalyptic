import { Domain } from '../../models/domain';

export interface DomainState {
  domains: Domain[];
  selectedDomain: Domain;
}

export const initialDomainsState: DomainState = {
  domains: null,
  selectedDomain: null
};
