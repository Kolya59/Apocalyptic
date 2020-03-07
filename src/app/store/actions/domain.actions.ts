import { Action } from '@ngrx/store';

import { IDomain } from '../../models/domain';

export enum EDomainActions {
  GetDomains = '[Domain] Get Domains',
  GetDomainsSuccess = '[Domain] Get Domains Success',
  GetDomain = '[Domain] Get Domain',
  GetDomainSuccess = '[Domain] Get Domain Success'
}

export class GetDomains implements Action {
  public readonly type = EDomainActions.GetDomains;
}

export class GetDomainsSuccess implements Action {
  public readonly type = EDomainActions.GetDomainsSuccess;
  constructor(public payload: IDomain[]) {}
}

export class GetDomain implements Action {
  public readonly type = EDomainActions.GetDomain;
  constructor(public payload: string) {}
}

export class GetDomainSuccess implements Action {
  public readonly type = EDomainActions.GetDomainSuccess;
  constructor(public payload: IDomain) {}
}

export type DomainActions =
  | GetDomains
  | GetDomainsSuccess
  | GetDomain
  | GetDomainSuccess;
