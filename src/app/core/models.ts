export interface IRule {
  id: string;
  name: string;
  premises: IStatement[];
  conclusions: IStatement[];
  description: string;
}

export interface IStatement {
  id: string;
  name: string;
  description: string;
  variable: IVariable;
  value: string;
}

export interface IVariable {
  id: string;
  name: string;
  isRequested: boolean;
  requestMsg?: string;
  description: string;
  domain: IDomain;
}

export interface IDomain {
  id: string;
  name: string;
  description: string;
  values: string[];

  insertValue(value: string): void;
  editValue(index: number, value: string): void;
  removeValue(index: number): void;
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

export class Statement implements IStatement {
  id: string;
  description: string;
  name: string;
  variable: IVariable;
  value: string;

  constructor(id: string, description: string, name: string, variable: IVariable, value: string) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.variable = variable;
    this.value = value;
  }
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

export class Domain implements IDomain {
  id: string;
  description: string;
  name: string;
  values: string[];

  constructor(id: string, name: string, description: string, values: string[]) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.values = values;
  }

  insertValue(value: string) {
    // TODO Validate
    this.values.push(value);
  }

  editValue(index: number, value: string) {
    // TODO Validate
    this.values[index] = value;
  }

  removeValue(index: number) {
    // TODO Check existing
    this.values = this.values.filter((_, i) => i !== index);
  }
}
