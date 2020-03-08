import { Action } from '@ngrx/store';
import { Domain } from '../../models/domain';

export class SetSubmittedDomainAction implements Action {
  static readonly TYPE = '[Domain Form] Set Domain';
  readonly type = SetSubmittedDomainAction.TYPE;

  constructor(public submittedValue: Domain) {
  }
}
