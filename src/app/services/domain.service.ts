import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomain } from '../models/domain';

@Injectable()
export class DomainService {
  constructor() {}

  getDomains(): Observable<IDomain[]> {
    return
  }
}
