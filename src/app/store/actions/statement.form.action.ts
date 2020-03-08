import { Action } from '@ngrx/store';
import { Statement } from '../../models/statement';

export class SetSubmittedStatementAction implements Action {
  static readonly TYPE = '[Statement Form] Set Statement';
  readonly type = SetSubmittedStatementAction.TYPE;

  constructor(public submittedValue: Statement) {
  }
}
