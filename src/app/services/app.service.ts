import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { App } from '../models/app.interface';
import { v4 } from 'uuid';
import { Statement } from '../models/statement';
import { Variable } from '../models/variable';
import { Domain } from '../models/domain';
import { Rule } from '../models/rule';

@Injectable()
export class AppService {
  getApp(): Observable<App> {
    const rules: Rule[] = [
      { id: v4(), name: 'Rule 1', premises: [], conclusions: [], description: 'Description 1' },
      { id: v4(), name: 'Rule 2', premises: [], conclusions: [], description: 'Description 2' },
      { id: v4(), name: 'Rule 3', premises: [], conclusions: [], description: 'Description 3' },
      { id: v4(), name: 'Rule 4', premises: [], conclusions: [], description: 'Description 4' }
    ];
    const statements: Statement[] = [];
    const domains: Domain[] = [
      { id: v4(), name: 'Domain 1', description: 'First/Second', values: ['First', 'Second'] },
      { id: v4(), name: 'Domain 2', description: 'Good/Bad', values: ['Good', 'Bad'] }
    ];
    const variables: Variable[] = [
      { id: v4(), name: 'Variable 1', isRequested: true, domain: domains[0].id },
      { id: v4(), name: 'Variable 2', isRequested: true, domain: domains[1].id }
    ];

    const app: App = {
      name: 'testApp',
      target: null as Variable,
      rules,
      statements,
      domains,
      variables
    };
    return of(app);
  }
}
