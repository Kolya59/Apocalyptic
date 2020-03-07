import { Statement } from '../../models/statement';

export interface IStatementState {
  statements: Statement[];
  selectedStatement: Statement;
}

export const initialStatementState: IStatementState = {
  statements: null,
  selectedStatement: null
};
