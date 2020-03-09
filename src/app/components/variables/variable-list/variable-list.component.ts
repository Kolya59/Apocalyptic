import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, Input } from '@angular/core';

import { Variable } from '../../../models/variable';
import { AppState } from '../../../store/state/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectVariableList } from '../../../store/selectors/variable.selector';
import { RemoveVariable, ReorderVariables, SetSelectedVariable } from '../../../store/actions/variable.actions';

@Component({
  selector: 'app-variables',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent {
  variables$ = this._store.select(selectVariableList);

  constructor(private _store: Store<AppState>, protected router: Router, private route: ActivatedRoute) {
  }

  insertVariable(): void {
    this.router.navigate(['variables', 'new']);
  }

  editVariable(id: string): void {
    this._store.dispatch(new SetSelectedVariable(id));
    this.router.navigate(['variables', id]);
  }

  removeVariable(id: string): void {
    // TODO Confirm removing
    this._store.dispatch(new RemoveVariable(id));
  }

  drop(e: CdkDragDrop<Variable>): void {
    this._store.dispatch(new ReorderVariables({ sourceID: e.previousIndex, targetID: e.currentIndex }));
  }
}
