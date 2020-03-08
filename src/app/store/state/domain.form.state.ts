import { AppState } from './app.state';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { Domain } from '../../models/domain';
import { v4 } from 'uuid';

export interface DomainFormState extends AppState {
  material: {
    formState: FormGroupState<Domain>;
    submittedValue: Domain | undefined;
  };
}

export const initialDomainFormState = createFormGroupState<Domain>('material', {
  id: v4(),
  name: 'New domain',
  values: []
});
