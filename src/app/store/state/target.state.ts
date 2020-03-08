import { Variable } from '../../models/variable';

export interface TargetState {
  selectedTarget: Variable | undefined;
}

export const initialTargetState: TargetState = {
  selectedTarget: undefined
};
