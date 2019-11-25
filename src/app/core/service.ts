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
    return container.filter(value => {
      console.log(value, removed, value !== removed);
      return value !== removed;
    });
  }
}

export class ValuedVariable {[uuid: string]: string}

export class ConsultationService {
  // conflictingSet: IRule[];
  workingMemory: ValuedVariable[];
  resultSubscription: Subject<ValuedVariable>;

  constructor(private readonly store: Store) {

  }

  async consult(target: IVariable): Promise<string | null> {
    const resolver = this.workingMemory[target.id];
    if (!!resolver) {
      return resolver.value;
    }

    if (target.isRequested) {
      // TODO Request value
      // TODO Push memory to working memory
      // TODO Return value
    }

    // TODO Collaborate with workingMemory
    // TODO Check it
    const conflictSet = this.store.rules.filter((value: IRule) =>
      !value.conclusions.filter((conclusion: IStatement) =>
        conclusion.variable === target
    ));

    /*from(this.store.rules).pipe(
      filter((value: IRule) => {
        let result = false;
        from(value.conclusions).pipe(
          map((conclusion: IStatement) => conclusion.variable === target),
          reduce((prev: boolean, curr: boolean) => prev || curr, false)
        ).subscribe((next: boolean) => result = next);
        return result;
      })
    );*/

    if (!conflictSet) {
      throw new Error(`Failed to compute value for ${target.name}`);
    }


    // TODO Rewrite as RxJs factory
    conflictSet.forEach((rule: IRule) => {
      from(rule.premises).pipe(
        tap((premise: IStatement) => conflictSet[premise.variable.id] = this.consult(premise.variable)),
        map((premise: IStatement) => conflictSet[premise.variable.id] === premise.value),
        // TODO Check default value
        reduce((prev: boolean, curr: boolean) => prev && curr, true)
      ).subscribe((next: boolean) => {
        if (!!next) {
          from(rule.conclusions).pipe(
            tap((conclusion: IStatement) => conflictSet[conclusion.variable.id] = conclusion.value)
          ).subscribe((conclusion: IStatement) => {
            // TODO Log
            console.log(conclusion);
          });
        }
      });
    });

    return conflictSet[target.id];
  }
}
