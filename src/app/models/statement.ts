import { IVariable } from './variable';

export interface IStatement {
  id: string;
  name: string;
  description: string;
  variable: IVariable;
  value: string;
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
