import { augmentAppWithServiceWorker } from '@angular-devkit/build-angular/src/angular-cli-files/utilities/service-worker';
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
      // DEBUG
      console.log(value, removed, value !== removed);
      return value !== removed;
    });
  }
}

export class VariableValueMap {[uuid: string]: string}

export class ConsultationService {
  // conflictingSet: IRule[];
  workingMemory: VariableValueMap;
  resultSubscription: Subject<VariableValueMap>;

  requestedVariableSub: Subject<IVariable>;
  requestResultSub: Subject<string>;

  constructor(private readonly store: Store) {

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
    const existedValued = this.workingMemory[target.id];
    if (!!existedValued) {
      return existedValued;
    }

    if (target.isRequested) {
      const request = await this.requestValue(target);
      this.workingMemory[target.id] = request;
      // TODO Check needing
      return request;
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
