export interface IRule {
  id: number;
  name: string;
  premises: IStatement[];
  conclusions: IStatement[];
  description: string;
}

export interface IStatement {
  id: number;
  variable: IVariable;
  value: string;
}

export interface IVariable {
  id: number;
  name: string;
  domain: IDomain;
}

export interface IDomain {
  id: number;
  name: string;
  values: string[];
}

export class Rule implements IRule {
  conclusions: IStatement[];
  id: number;
  name: string;
  premises: IStatement[];
  description: string;

  constructor(id: number, name: string, premises: IStatement[], conclusions: IStatement[], description: string) {
    this.id = id;
    this.name = name;
    this.premises = premises;
    this.conclusions = conclusions;
    this.description = description;
  }

  public ToJSON(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.stringify(this));
    });
  }

  public FromJSON(input: string): Promise<Rule> {
    return new Promise<Rule>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.parse(input));
    });
  }
}

export class Statement implements IStatement {
  id: number;
  value: string;
  variable: IVariable;

  constructor(id: number, value: string, variable: IVariable) {
    this.id = id;
    this.value = value;
    this.variable = variable;
  }

  public ToJSON(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.stringify(this));
    });
  }

  public FromJSON(input: string): Promise<Statement> {
    return new Promise<Statement>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.parse(input));
    });
  }
}

export class Variable implements IVariable {
  domain: IDomain;
  id: number;
  name: string;


  constructor(id: number, name: string, domain: IDomain) {
    this.id = id;
    this.name = name;
    this.domain = domain;
  }

  public ToJSON(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.stringify(this));
    });
  }

  public FromJSON(input: string): Promise<Variable> {
    return new Promise<Variable>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.parse(input));
    });
  }
}


export class Domain implements IDomain {
  id: number;
  name: string;
  values: string[];

  constructor(id: number, name: string, values: string[]) {
    this.id = id;
    this.name = name;
    this.values = values;
  }

  public ToJSON(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.stringify(this));
    });
  }

  public FromJSON(input: string): Promise<Domain> {
    return new Promise<Domain>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.parse(input));
    });
  }
}
