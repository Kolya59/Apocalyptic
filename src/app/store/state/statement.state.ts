import { Statement } from '../../models/statement';

export interface StatementState {
  statements: Statement[];
  selectedStatement: Statement;
}

export const initialStatementState: StatementState = {
  statements: null,
  selectedStatement: null
};
