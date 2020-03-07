import { IStatement } from './statement';

export interface IRule {
  id: string;
  name: string;
  premises: IStatement[];
  conclusions: IStatement[];
  description: string;
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
