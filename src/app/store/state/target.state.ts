import { Variable } from '../../models/variable';

export interface TargetState {
  selectedTarget: Variable;
}

export const initialTargetState: TargetState = {
  selectedTarget: null
};
