import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domain } from '../models/domain';

@Injectable()
export class DomainService {
  constructor() {}

  getDomains(): Observable<Domain[]> {
    return;
  }
}
