import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { Statement } from '../../models/statement';
import { v4 } from 'uuid';

export interface StatementFormState extends AppState {
  material: {
    formState: FormGroupState<Statement>;
    submittedValue: Statement | undefined;
  };
}

export const initialStatementFormState = createFormGroupState<Statement>('material', {
  id: v4(),
  name: 'New statement',
  variable: null,
  value: ''
});
