import { Variable } from '../../models/variable';

export interface ITargetState {
  selectedTarget: Variable;
}

export const initialTargetState: ITargetState = {
  selectedTarget: null
};
