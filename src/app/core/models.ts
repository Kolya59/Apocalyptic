export interface IRule {
  id: string;
  name: string;
  premises: IStatement[];
  conclusions: IStatement[];
  description: string;
}

export interface IStatement {
  variable: IVariable;
  value: string;
}

export interface IVariable {
  id: string;
  name: string;
  isRequested: boolean;
  requestMsg?: string;
  description: string;
  values: string[];
}

export class Rule implements IRule {
  id: string;
  name: string;
  premises: IStatement[];
  conclusions: IStatement[];
  description: string;

  constructor(id: string, name: string, premises: IStatement[], conclusions: IStatement[], description: string) {
    this.id = id;
    this.name = name;
    this.premises = premises;
    this.conclusions = conclusions;
    this.description = description;
  }
}

export class Variable implements IVariable {
  values: string[];
  description: string;
  id: string;
  isRequested: boolean;
  requestMsg?: string;
  name: string;

  constructor(id: string, name: string, isRequested: boolean, description: string, values: [string]) {
    this.id = id;
    this.name = name;
    this.isRequested = isRequested;
    this.description = description;
    this.values = values;
  }
}

export class VariableValueMap {[uuid: string]: string}
