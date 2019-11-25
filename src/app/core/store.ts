import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Domain, IDomain, IRule, IStatement, IVariable, Rule, Variable } from './models';

@Injectable()
export class Store {
  rules: IRule[];
  variables: IVariable[];
  domains: IDomain[];
  target: IVariable;

  constructor() {
    this.rules = [];
    this.variables = [];
    this.domains = [];
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

  public insertVariable(name: string, isRequested: boolean, description: string, domain: IDomain): Promise<IVariable> {
    return new Promise<IVariable>((resolve, reject) => {
      // TODO Get id
      const id = Store.getUUID();
      const rule = new Variable(id, name, isRequested, description,  domain);
      // TODO Validate variable
      this.variables.push(rule);
      resolve(rule);
    });
  }

  public updateVariable(id: string, name: string, description: string, domain: IDomain): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getVariable(id)
        .then((oldVariable: Variable) => {
          // TODO Check: is it changing collection?
          oldVariable.name = name;
          oldVariable.description = description;
          oldVariable.domain = domain;
          // TODO Validate new value
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public removeVariable(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.variables = this.variables.filter((variable) => variable.id !== id);
      resolve();
    });
  }

  public getDomain(id: string): Promise<IDomain> {
    return new Promise(((resolve, reject) => {
      const domain = this.domains.find((element) => element.id === id);
      if (domain === undefined) {
        reject('Failed to find the domain');
      }
      resolve(domain);
    }));
  }

  public insertDomain(name: string, description: string, values: string[]): Promise<IDomain> {
    return new Promise<IDomain>((resolve, reject) => {
      // TODO Get id
      const id = Store.getUUID();
      const domain = new Domain(id, name, description, values);
      // TODO Validate variable
      this.domains.push(domain);
      resolve(domain);
    });
  }

  public updateDomain(id: string, name: string, description: string, values: string[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getDomain(id)
        .then((oldDomain: Domain) => {
          // TODO Check: is it changing collection?
          oldDomain.name = name;
          oldDomain.description = description;
          oldDomain.values = values;
          // TODO Validate new domain
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public removeDomain(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.domains = this.domains.filter((domain) => domain.id !== id);
      resolve();
    });
  }

  public toJSON() {
    return JSON.stringify({
      rules: this.rules,
      domains: this.domains,
      variables: this.variables
    });
  }

  public fromJSON(input: string): void {
    const newStore = JSON.parse(input);
    this.rules = newStore.rules;
    this.domains = newStore.domains;
    this.variables = newStore.variables;
  }
}
