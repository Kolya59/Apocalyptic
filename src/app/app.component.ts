import { Component } from '@angular/core';
import { Store } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly store: Store) {
    store.insertRule(
      'Rule 1',
      [],
      [],
      'Description 1'
    );
    store.insertRule(
      'Rule 2',
      [],
      [],
      'Description 2'
    );
    store.insertRule(
      'Rule 3',
      [],
      [],
      'Description 3'
    );
    store.insertRule(
      'Rule 4',
      [],
      [],
      'Description 4'
    );
    store.insertDomain(
      'Domain 1',
      'First/Second',
      ['First', 'Second']
    );
    store.insertDomain(
      'Domain 2',
      'Good/Bad',
      ['Good', 'Bad']
    );
    store.insertVariable(
      'Variable 1',
      true,
      '',
      store.domains[0]
    );
    store.insertVariable(
      'Variable 2',
      true,
      '',
      store.domains[1]
    );
  }

  getHeader() {
    return !!this.store.target ? `Current target is ${this.store.target.name}` : `Target is not chosen`;
  }
}
