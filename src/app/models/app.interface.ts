import { Domain } from './domain';
import { Rule } from './rule';
import { Statement } from './statement';
import { Variable } from './variable';

export interface App {
  name: string;
  domains: Domain[];
  rules: Rule[];
  statements: Statement[];
  variables: Variable[];
  target: Variable;
  description?: string;
}
