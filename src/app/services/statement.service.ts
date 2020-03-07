import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatement } from '../models/statement';

@Injectable()
export class StatementService {
  constructor() {}

  getStatements(): Observable<IStatement[]> {
    return
  }
}
