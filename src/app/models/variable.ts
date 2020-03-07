import { IDomain } from './domain';

export interface IVariable {
  id: string;
  name: string;
  isRequested: boolean;
  requestMsg?: string;
  description: string;
  domain: IDomain;
}

export class Variable implements IVariable {
  domain: IDomain;
  description: string;
  id: string;
  isRequested: boolean;
  requestMsg?: string;
  name: string;

  constructor(id: string, name: string, isRequested: boolean, description: string, domain: IDomain) {
    this.id = id;
    this.name = name;
    this.isRequested = isRequested;
    this.description = description;
    this.domain = domain;
  }
}

export class VariableValueMap {[uuid: string]: string}
