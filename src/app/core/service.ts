import { Store } from './store';
import { IRule, IStatement, IVariable } from './models';
import { from, Subject } from 'rxjs';
import { map, reduce, tap } from 'rxjs/operators';

export class Service {
  static reorder<T>(x: number, y: number, container: T[]): T[] {
    return x < y
      ? container.slice(0, x).concat(
        container.slice(x + 1, y + 1),
        container[x],
        container.slice(y + 1))
      : container.slice(0, y).concat(
        container[x],
        container.slice(y, x),
        container.slice(x + 1));
  }

  static remove<T>(removed: T, container: T[]): T[] {
    return container.filter(value => value !== removed);
  }
}

export class ConsultationService {
  requestedVariableSub: Subject<IVariable>;
  requestResultSub: Subject<string>;

  targets: {
    var: IVariable;
    val: string;
  }[];

  constructor(private readonly store: Store) {
    this.requestedVariableSub = new Subject<IVariable>();
    this.requestResultSub = new Subject<string>();
    this.targets = [];
  }

  async requestValue(requested: IVariable): Promise<string> {
    return new Promise(((resolve, reject) => {
      this.requestedVariableSub.next(requested);
      this.requestResultSub.subscribe(
        (next: string) => resolve(next)
      );
    }));
  }

  async consult(target: IVariable) {
    const log = { var: target, val: null };
    const existedValued = this.store.workingMemory[target.id];
    if (existedValued) {
      log.val = existedValued;
      this.targets.push(log);
      return existedValued;
    }

    // TODO Think about consultation stopping
    if (target.isRequested) {
      const res = await this.requestValue(target);
      log.val = res;
      this.targets.push(log);
      return res;
    }

    const conflictSet = this.store.rules.filter((value: IRule) =>
      value.conclusions.filter((conclusion: IStatement) => conclusion.variable === target).length !== 0
    );

    if (conflictSet.length === 0) {
      throw new Error(`Failed to compute value for ${target.name}`);
    }

    conflictSet.forEach((rule: IRule) => {
      from(rule.premises).pipe(
        tap(async (premise: IStatement) => {
          const res = await this.consult(premise.variable);
          this.store.workingMemory[premise.variable.id] = res;
          conflictSet[premise.variable.id] = res;
        }),
        map((premise: IStatement) => conflictSet[premise.variable.id] === premise.value),
        // TODO Check default value
        reduce((prev: boolean, curr: boolean) => prev && curr, true)
      ).subscribe((next: boolean) => {
        if (next) {
          from(rule.conclusions).forEach(
            (conclusion: IStatement) => conflictSet[conclusion.variable.id] = conclusion.value
          );
        }
      });
    });

    log.val = conflictSet[target.id];
    this.targets.push(log);
    return conflictSet[target.id];
  }
}
