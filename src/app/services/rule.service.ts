import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rule } from '../models/rule';

@Injectable()
export class RuleService {
  constructor() {
  }

  getRules(): Observable<Rule[]> {
    return;
  }

  addRule(): Observable<Rule[]> {
    return;
  }

  updateRule(): Observable<Rule[]> {
    return;
  }

  removeRule(): Observable<Rule[]> {
    return;
  }
}
