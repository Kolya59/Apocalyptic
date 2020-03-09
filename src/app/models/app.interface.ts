import { Rule } from './rule';
import { Statement } from './statement';
import { Variable } from './variable';

export interface App {
  name: string;
  rules: Rule[];
  statements: Statement[];
  variables: Variable[];
  target: Variable;
  description?: string;
}
