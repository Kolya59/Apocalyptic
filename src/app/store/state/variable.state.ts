import { Variable } from '../../models/variable';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AppState } from './app.state';

export const initialVariableState: Variable = {
  description: '',
  domain: [],
  id: '',
  isRequested: false,
  name: 'New variable',
  requestMsg: ''
};

export interface VariableListState {
  variables: Variable[];
  selectedVariable: Variable;
}

export const initialVariableListState: VariableListState = {
  variables: [],
  selectedVariable: null
};

export interface VariableFormState extends AppState {
  variableForm: {
    formState: FormGroupState<Variable>;
    submittedValue: Variable | undefined;
  };
}

export const initialVariableFormState = createFormGroupState<Variable>('variableForm', initialVariableState);
