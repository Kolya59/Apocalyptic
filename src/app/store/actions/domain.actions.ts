import { Action } from '@ngrx/store';

import { Domain } from '../../models/domain';

export enum EDomainActions {
  GetDomains = '[Domain] Get Domains',
  GetDomainsSuccess = '[Domain] Get Domains Success',
  GetDomainsError = '[Domain] Get Domains Error',
  GetDomain = '[Domain] Get Domain',
  GetDomainSuccess = '[Domain] Get Domain Success',
  GetDomainError = '[Domain] Get Domain Error',
  AddDomain = '[Domain] Add Domain',
  AddDomainSuccess = '[Domain] Add Domain Success',
  AddDomainError = '[Domain] Add Domain Error',
  UpdateDomain = '[Domain] Update Domain',
  UpdateDomainSuccess = '[Domain] Update Domain Success',
  UpdateDomainError = '[Domain] Update Domain Error',
  RemoveDomain = '[Domain] Remove',
  RemoveDomainSuccess = '[Domain] Remove Domain Success',
  RemoveDomainError = '[Domain] Remove DomainErrors'
}

export class GetDomains implements Action {
  public readonly type = EDomainActions.GetDomains;
}

export class GetDomainsSuccess implements Action {
  public readonly type = EDomainActions.GetDomainsSuccess;

  constructor(public payload: Domain[]) {
  }
}

export class GetDomainsError implements Action {
  public readonly type = EDomainActions.GetDomainsError;

  constructor(public payload: Domain[]) {
  }
}

export class GetDomain implements Action {
  public readonly type = EDomainActions.GetDomain;

  constructor(public payload: string) {
  }
}

export class GetDomainSuccess implements Action {
  public readonly type = EDomainActions.GetDomainSuccess;

  constructor(public payload: Domain) {
  }
}

export class GetDomainError implements Action {
  public readonly type = EDomainActions.GetDomainError;

  constructor(public payload: Domain) {
  }
}

export class AddDomain implements Action {
  public readonly type = EDomainActions.AddDomain;

  constructor(public payload: string) {
  }
}

export class AddDomainSuccess implements Action {
  public readonly type = EDomainActions.AddDomainSuccess;

  constructor(public payload: Domain) {
  }
}

export class AddDomainError implements Action {
  public readonly type = EDomainActions.AddDomainError;

  constructor(public payload: Domain) {
  }
}

export class UpdateDomain implements Action {
  public readonly type = EDomainActions.UpdateDomain;

  constructor(public payload: string) {
  }
}

export class UpdateDomainSuccess implements Action {
  public readonly type = EDomainActions.UpdateDomainSuccess;

  constructor(public payload: Domain) {
  }
}

export class UpdateDomainError implements Action {
  public readonly type = EDomainActions.UpdateDomainError;

  constructor(public payload: Domain) {
  }
}

export class RemoveDomain implements Action {
  public readonly type = EDomainActions.RemoveDomain;

  constructor(public payload: string) {
  }
}

export class RemoveDomainSuccess implements Action {
  public readonly type = EDomainActions.RemoveDomainSuccess;

  constructor(public payload: Domain) {
  }
}

export class RemoveDomainError implements Action {
  public readonly type = EDomainActions.RemoveDomainError;

  constructor(public payload: Domain) {
  }
}

export type DomainActions =
  | GetDomains
  | GetDomainsSuccess
  | GetDomainsError
  | GetDomain
  | GetDomainSuccess
  | GetDomainError
  | AddDomain
  | AddDomainSuccess
  | AddDomainError
  | UpdateDomain
  | UpdateDomainSuccess
  | UpdateDomainError
  | RemoveDomain
  | RemoveDomainSuccess
  | RemoveDomainError;
