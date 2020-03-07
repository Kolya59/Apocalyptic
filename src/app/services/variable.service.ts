import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Variable } from '../models/variable';

@Injectable()
export class VariableService {
  constructor() {}

  getVariables(): Observable<Variable[]> {
    return;
  }
}
