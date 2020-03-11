import { Statement } from '../../models/statement';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AppState } from './app.state';

export const initialStatementState: Statement = {
  id: '',
  name: 'New statement',
  variable: null,
  value: ''
};

export interface StatementFormState {
  formState: FormGroupState<Statement>;
  submittedValue: Statement | undefined;
}

export interface StatementsState extends AppState {
  statements: StatementFormState[];
}

export const initialStatementsState = [];
