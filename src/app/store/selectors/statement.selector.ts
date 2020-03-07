import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IStatementState } from '../state/statement.state';

const selectStatements = (state: IAppState) => state.statements;

export const selectStatementList = createSelector(
  selectStatements,
  (state: IStatementState) => state.statements
);

export const selectSelectedStatement = createSelector(
  selectStatements,
  (state: IStatementState) => state.selectedStatement
);
