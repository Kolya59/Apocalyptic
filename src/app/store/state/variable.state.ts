import { IVariable } from '../../models/variable';

export interface IVariableState {
  variables: IVariable[];
  selectedVariable: IVariable;
}

export const initialVariableState: IVariableState = {
  variables: null,
  selectedVariable: null
};
