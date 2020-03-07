import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVariable } from '../models/variable';

@Injectable()
export class VariableService {
  constructor() {}

  getVariables(): Observable<IVariable[]> {
    return
  }
}
