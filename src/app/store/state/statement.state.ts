import { Statement } from '../../models/statement';
import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { v4 } from 'uuid';

export interface StatementState {
  statements: Statement[];
  selectedStatement: Statement;
}

export const initialStatementState: StatementState = {
  statements: null,
  selectedStatement: null
};

export interface StatementFormState extends AppState {
  statementForm: {
    formState: FormGroupState<Statement>;
    submittedValue: Statement | undefined;
  };
}

export const initialStatementFormState = createFormGroupState<Statement>('statementForm', {
  id: '',
  name: 'New statement',
  variable: null,
  value: ''
});
