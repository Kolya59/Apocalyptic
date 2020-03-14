import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { IRule, IStatement, IVariable, Rule, Variable, VariableValueMap } from './models';

@Injectable()
export class Store {
  rules: IRule[];
  variables: IVariable[];
  target: IVariable;
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

  public getRule(id: string): Promise<IRule> {
    return new Promise((resolve, reject) => {
      const rule = this.rules.find((element) => element.id === id);
      if (rule === undefined) {
        reject('Failed to find the rule');
      }
      resolve(rule);
    });
  }

  public insertRule(name: string, premises: IStatement[], conclusions: IStatement[], description: string): Promise<IRule> {
    return new Promise<IRule>((resolve) => {
      // @ts-ignore
      const id = Store.getUUID();
      const rule = new Rule(id, name, premises, conclusions, description);
      // TODO Validate rule
      this.rules.push(rule);
      resolve(rule);
    });
  }

  public updateRule(id: string, name: string, premises: IStatement[], conclusions: IStatement[], description: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getRule(id)
        .then((oldRule: Rule) => {
          // TODO Check: is it changing collection?
          oldRule.name = name;
          oldRule.premises = premises;
          oldRule.conclusions = conclusions;
          oldRule.description = description;
          // TODO Validate new value
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public removeRule(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.rules = this.rules.filter((rule) => rule.id !== id);
    });
  }

  public getVariable(id: string): Promise<IVariable> {
    return new Promise(((resolve, reject) => {
      const variable = this.variables.find((element) => element.id === id);
      if (variable === undefined) {
        reject('Failed to find the rule');
      }
      resolve(variable);
    }));
  }

  public insertVariable(name: string, isRequested: boolean, description: string, values: [string]): Promise<IVariable> {
    return new Promise<IVariable>((resolve, reject) => {
      // TODO Get id
      const id = Store.getUUID();
      const rule = new Variable(id, name, isRequested, description, values);
      // TODO Validate variable
      this.variables.push(rule);
      resolve(rule);
    });
  }

  public updateVariable(id: string, name: string, description: string, values: [string]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getVariable(id)
        .then((oldVariable: Variable) => {
          // TODO Check: is it changing collection?
          oldVariable.name = name;
          oldVariable.description = description;
          oldVariable.values = values;
          // TODO Validate new value
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public removeVariable(id: string) {
    // TODO Refactor the bydlocode
    this.variables = this.variables.filter((variable) => variable.id !== id);
  }


  public toJSON() {
    return JSON.stringify({
      rules: this.rules,
      variables: this.variables
    });
  }

  public fromJSON(input: string): void {
    const newStore = JSON.parse(input);
    this.rules = newStore.rules;
    this.variables = newStore.variables;
  }
}
