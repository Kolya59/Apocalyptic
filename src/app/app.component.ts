import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectSelectedTarget } from './store/selectors/target.selector';
import { GetApp } from './store/actions/app.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  target$ = this._store.pipe(select(selectSelectedTarget));

  constructor(private _store: Store<AppState>, protected router: Router, protected route: ActivatedRoute, protected location: Location) {
    this.router.navigate(['rules', 'new']);
  }

  ngOnInit(): void {
    this._store.dispatch(new GetApp());
  }
}
