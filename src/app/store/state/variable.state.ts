import { Variable } from '../../models/variable';

export interface IVariableState {
  variables: Variable[];
  selectedVariable: Variable;
}

export const initialVariableState: IVariableState = {
  variables: null,
  selectedVariable: null
};
