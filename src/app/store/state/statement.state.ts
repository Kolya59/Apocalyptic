import { IStatement } from '../../models/statement';

export interface IStatementState {
  statements: IStatement[];
  selectedStatement: IStatement;
}

export const initialStatementState: IStatementState = {
  statements: null,
  selectedStatement: null
};
