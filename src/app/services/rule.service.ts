import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRule } from '../models/rule';

@Injectable()
export class RuleService {
  constructor() {}

  getRules(): Observable<IRule[]> {
    return
  }
}
