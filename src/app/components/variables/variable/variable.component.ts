import { Component, OnDestroy } from '@angular/core';
import { Variable } from '../../../models/variable';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import { filter, map, switchMap, take, takeLast } from 'rxjs/operators';
import { AppState } from '../../../store/state/app.state';
import { AddVariable, SetSubmittedVariableAction, UpdateVariable } from '../../../store/actions/variable.actions';
import { Location } from '@angular/common';
import { initialVariableFormState, initialVariableState } from '../../../store/state/variable.state';
import { selectVariable } from '../../../store/selectors/variable.selector';

@Component({
  selector: 'app-variable-dialog',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent {
  isNew: boolean;
  formState$: Observable<FormGroupState<Variable>>;
  submittedValue$: Observable<Variable | undefined>;

  constructor(private _store: Store<AppState>, protected router: Router, private route: ActivatedRoute, private location: Location) {
    const id = this.route.snapshot.params['id'];
    this.isNew = id === 'new';
    this.formState$ = this._store.pipe(select(s => s.variableForm.formState));
    this.submittedValue$ = this._store.pipe(select(s => s.variableForm.submittedValue));
  }

  submit() {
    this.formState$
      .pipe(
        take(1),
        filter(s => s.isValid),
        map(fs => new SetSubmittedVariableAction(fs.value))
      )
      .subscribe(this._store);
  }

  save() {
    this.submit();
    this.submittedValue$
      .pipe(take(1))
      .subscribe(next => this._store.dispatch(this.isNew ? new AddVariable(next) : new UpdateVariable(next)));
    this.router.navigate(['variables']);
  }

  cancel() {
    this._store.dispatch(new SetValueAction(initialVariableState.id, initialVariableState));
    this._store.dispatch(new ResetAction(initialVariableState.id));
    this.router.navigate(['variables']);
  }
}
