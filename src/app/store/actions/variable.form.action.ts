import { Action } from '@ngrx/store';
import { Variable } from '../../models/variable';

export class SetSubmittedVariableAction implements Action {
  static readonly TYPE = '[Variable Form] Set Variable';
  readonly type = SetSubmittedVariableAction.TYPE;

  constructor(public submittedValue: Variable) {
  }
}
