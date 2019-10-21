import { Domain, IDomain, IRule, IStatement, IVariable, Rule, Variable } from '../models';
import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  rules: IRule[];
  variables: IVariable[];
  domains: IDomain[];

  constructor() {
    this.rules = [];
    this.variables = [];
    this.domains = [];
  }

  public getRule(id: number): Promise<IRule> {
    return new Promise((resolve, reject) => {
      const rule = this.rules.find((element) => element.id === id);
      if (rule === undefined) {
        reject('Failed to find the rule');
      }
      resolve(rule);
    });
  }

  public insertRule(name: string, premises: IStatement[], conclusions: IStatement[], description: string): Promise<IRule> {
    return new Promise<IRule>((resolve, reject) => {
      // TODO Get id
      const id = 0;
      const rule = new Rule(id, name, premises, conclusions, description);
      // TODO Validate rule
      this.rules.push(rule);
      resolve(rule);
    });
  }

  public updateRule(id: number, name: string, premises: IStatement[], conclusions: IStatement[], description: string): Promise<void> {
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

  public deleteRule(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.rules = this.rules.filter((rule) => rule.id !== id);
    });
  }

  public getVariable(id: number): Promise<IVariable> {
    return new Promise(((resolve, reject) => {
      const variable = this.variables.find((element) => element.id === id);
      if (variable === undefined) {
        reject('Failed to find the rule');
      }
      resolve(variable);
    }));
  }

  public insertVariable(name: string, domain: IDomain): Promise<IVariable> {
    return new Promise<IVariable>((resolve, reject) => {
      // TODO Get id
      const id = 0;
      const rule = new Variable(id, name, domain);
      // TODO Validate variable
      this.variables.push(rule);
      resolve(rule);
    });
  }

  public updateVariable(id: number, name: string, domain: IDomain): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getVariable(id)
        .then((oldVariable: Variable) => {
          // TODO Check: is it changing collection?
          oldVariable.name = name;
          oldVariable.domain = domain;
          // TODO Validate new value
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public deleteVariable(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.variables = this.variables.filter((variable) => variable.id !== id);
    });
  }

  public getDomain(id: number): Promise<IDomain> {
    return new Promise(((resolve, reject) => {
      const domain = this.domains.find((element) => element.id === id);
      if (domain === undefined) {
        reject('Failed to find the domain');
      }
      resolve(domain);
    }));
  }

  public insertDomain(name: string, values: string[]): Promise<IDomain> {
    return new Promise<IDomain>((resolve, reject) => {
      // TODO Get id
      const id = 0;
      const domain = new Domain(id, name, values);
      // TODO Validate variable
      this.domains.push(domain);
      resolve(domain);
    });
  }

  public updateDomain(id: number, name: string, values: string[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getDomain(id)
        .then((oldDomain: Domain) => {
          // TODO Check: is it changing collection?
          oldDomain.name = name;
          oldDomain.values = values;
          // TODO Validate new domain
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public deleteDomain(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO Refactor the bydlocode
      this.variables = this.variables.filter((domain) => domain.id !== id);
    });
  }

  public ToJSON(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.stringify(this));
    });
  }

  public FromJSON(input: string): Promise<Store> {
    return new Promise<Store>((resolve, reject) => {
      // TODO Validate
      resolve(JSON.parse(input));
    });
  }
}
