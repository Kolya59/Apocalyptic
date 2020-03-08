import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, Input } from '@angular/core';

import { Rule } from '../../../models/rule';
import { Variable } from '../../../models/variable';
import { AppState } from '../../../store/state/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectVariableList } from '../../../store/selectors/variable.selector';
import { RemoveVariable } from '../../../store/actions/variable.actions';

@Component({
  selector: 'app-variables',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent {
  @Input()
  variables: Variable[];

  constructor(private _store: Store<AppState>, protected router: Router) {
    this._store.select(selectVariableList).subscribe(next => (this.variables = next));
  }

  // TODO Refactor
  drop(e: CdkDragDrop<Rule>): void {
    // TODO Restore
    // this.store.variables = Service.reorder(e.previousIndex, e.currentIndex, this.store.variables);
  }

  insertVariable(): void {
    this.router.navigate(['variables', 'new']);
  }

  editVariable(id: string): void {
    this.router.navigate(['variables', id]);
  }

  removeVariable(id: string): void {
    // TODO Confirm removing
    this._store.dispatch(new RemoveVariable(id));
  }
}
