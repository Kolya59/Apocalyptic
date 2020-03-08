import { createFormGroupState } from 'ngrx-forms';
import { Variable } from '../../models/variable';
import { v4 } from 'uuid';

export const initialVariableFormState = createFormGroupState<Variable>('material', {
  id: v4(),
  name: 'New variable',
  domain: null,
  isRequested: false
});
