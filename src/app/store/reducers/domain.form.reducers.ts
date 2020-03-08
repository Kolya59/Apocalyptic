import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { minLength, required } from 'ngrx-forms/validation';
import { Action, combineReducers } from '@ngrx/store';
import { DomainFormState, initialDomainFormState } from '../state/domain.form.state';
import { SetSubmittedDomainAction } from '../actions/domain.form.action';
import { Domain } from '../../models/domain';

const validationFormGroupReducer = createFormStateReducerWithUpdate<Domain>(
  updateGroup<Domain>({
    id: validate(required),
    name: validate(required),
    values: validate(minLength(0)),
    description: validate(minLength(0))
  })
);

const reducers = combineReducers<DomainFormState['material'], any>({
  formState(s = initialDomainFormState, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: Domain | undefined, a: SetSubmittedDomainAction) {
    if (a.type === SetSubmittedDomainAction.TYPE) {
      return a.submittedValue;
    } else {
      return s;
    }
  }
});

export function domainsFormReducer(s: DomainFormState['material'], a: Action) {
  return reducers(s, a);
}
