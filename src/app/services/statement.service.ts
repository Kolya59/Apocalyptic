import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statement } from '../models/statement';

@Injectable()
export class StatementService {
  constructor() {}

  getStatements(): Observable<Statement[]> {
    return;
  }
}
