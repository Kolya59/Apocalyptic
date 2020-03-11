import { Variable } from '../../models/variable';
import { FormGroupState } from 'ngrx-forms';
import { AppState } from './app.state';

export const initialVariableState: Variable = {
  description: '',
  domain: [],
  id: '',
  isRequested: false,
  name: 'New variable',
  requestMsg: ''
};

export interface VariableFormState {
  formState: FormGroupState<Variable>;
  submittedValue: Variable | undefined;
}

export interface VariablesState extends AppState {
  variables: VariableFormState[];
}

export const initialVariablesState = [];
