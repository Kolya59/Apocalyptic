import { Variable } from '../../models/variable';

export interface VariableState {
  variables: Variable[];
  selectedVariable: Variable;
}

export const initialVariableState: VariableState = {
  variables: null,
  selectedVariable: null
};
