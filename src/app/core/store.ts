import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Rule, Statement, Variable, VariableValueMap } from './models';

@Injectable()
export class Store {
  rules: Rule[];
  variables: Variable[];
  target: Variable;
  workingMemory: VariableValueMap;

  constructor() {
    this.rules = [];
    this.variables = [];
    // TODO Pass targets to logs
    this.workingMemory = {};
  }

  public static getUUID(): string {
    return uuid().toString();
  }

  public getRule(id: string): Rule {
    const rule = this.rules.find((r) => r.id === id);
    if (!rule) {
      throw new Error('Rule not found');
    }
    return rule;
  }

  public insertRule(
    name: string,
    premises: Statement[],
    conclusions: Statement[],
    description: string
  ): Rule {
    const id = Store.getUUID();
    const rule = new Rule(id, name, premises, conclusions, description);
    // TODO Validate rule
    this.rules.push(rule);
    return rule;
  }

  public updateRule(
    id: string,
    name: string,
    premises: Statement[],
    conclusions: Statement[],
    description: string
  ) {
    const oldId = this.rules.findIndex((rule: Rule) => rule.id === id);
    if (oldId === -1) {
      throw new Error('Rule not found');
    }
    this.rules = [].concat(
      this.rules.slice(0, oldId),
      {
        id,
        name,
        premises,
        conclusions,
        description,
      },
      this.rules.slice(oldId + 1)
    );
  }

  public removeRule(id: string) {
    this.rules = this.rules.filter((rule) => rule.id !== id);
  }

  public getVariable(id: string): Variable {
    const variable = this.variables.find((v) => v.id === id);
    if (!variable) {
      throw new Error('Variable not found');
    }
    return variable;
  }

  public insertVariable(
    name: string,
    isRequested: boolean,
    description: string,
    domain: string[]
  ): Variable {
    const id = Store.getUUID();
    const variable = new Variable(id, name, isRequested, description, domain);
    // TODO Validate variable
    this.variables.push(variable);
    return variable;
  }

  public updateVariable(
    id: string,
    name: string,
    description: string,
    domain: string[]
  ) {
    const oldId = this.variables.findIndex((v) => v.id === id);
    if (oldId === -1) {
      throw new Error('Variable not found');
    }
    this.variables = [].concat(
      this.variables.slice(0, oldId),
      {
        id,
        name,
        description,
        domain,
      },
      this.variables.slice(oldId + 1)
    );
  }

  public removeVariable(id: string) {
    this.variables = this.variables.filter((v) => v.id !== id);
  }

  public toJSON() {
    return JSON.stringify({
      rules: this.rules,
      variables: this.variables,
    });
  }

  public fromJSON(input: string): void {
    const newStore = JSON.parse(input);
    this.rules = newStore.rules;
    this.variables = newStore.variables;
  }
}
