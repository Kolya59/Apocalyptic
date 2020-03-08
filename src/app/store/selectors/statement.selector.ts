import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { StatementState } from '../state/statement.state';

const selectStatements = (state: AppState) => state.statements;

export const selectStatementList = createSelector(
  selectStatements,
  (state: StatementState) => state.statements
);

export const selectSelectedStatement = createSelector(
  selectStatements,
  (state: StatementState) => state.selectedStatement
);
