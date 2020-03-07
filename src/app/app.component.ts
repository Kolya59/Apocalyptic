import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectSelectedTarget } from './store/selectors/target.selector';
import { GetApp } from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  target$ = this._store.pipe(select(selectSelectedTarget));

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this._store.dispatch(new GetApp());
  }
}
