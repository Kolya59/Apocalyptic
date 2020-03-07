import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { EDomainActions, GetDomain, GetDomainsSuccess, GetDomainSuccess } from '../actions/domain.actions';
import { DomainService } from '../../services/domain.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectDomainList } from '../selectors/domain.selector';
import { Domain } from '../../models/domain';

@Injectable()
export class DomainEffects {
  @Effect()
  getDomain$ = this._actions$.pipe(
    ofType<GetDomain>(EDomainActions.GetDomain),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectDomainList))),
    switchMap(([id, domains]) => {
      const selectedDomain = domains.filter(domain => domain.id === id)[0];
      return of(new GetDomainSuccess(selectedDomain));
    })
  );

  @Effect()
  getDomains$ = this._actions$.pipe(
    ofType<GetDomain>(EDomainActions.GetDomains),
    switchMap(() => this._domainService.getDomains()),
    switchMap((domains: Domain[]) => of(new GetDomainsSuccess(domains)))
  );

  constructor(
    private _domainService: DomainService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
