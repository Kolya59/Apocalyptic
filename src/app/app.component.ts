import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store } from '@ngrx/store';
import { GetRules } from './store/actions/rule.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _store: Store<IAppState>) {
    store.insertRule('Rule 1', [], [], 'Description 1');
    store.insertRule('Rule 2', [], [], 'Description 2');
    store.insertRule('Rule 3', [], [], 'Description 3');
    store.insertRule('Rule 4', [], [], 'Description 4');
    store.insertDomain('Domain 1', 'First/Second', ['First', 'Second']);
    store.insertDomain('Domain 2', 'Good/Bad', ['Good', 'Bad']);
    store.insertVariable('Variable 1', true, '', store.domains[0]);
    store.insertVariable('Variable 2', true, '', store.domains[1]);
  }

  ngOnInit(): void {
    this._store.dispatch(new GetRules());
  }

  getHeader() {
    return !!this.store.target ? `Current target is ${this.store.target.name}` : `Target is not chosen`;
  }
}
