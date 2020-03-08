import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Variable } from '../../../models/variable';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { filter, map, take } from 'rxjs/operators';
import { SetSubmittedVariableAction } from '../../../store/actions/variable.form.action';
import { Domain } from '../../../models/domain';
import { selectDomainList } from '../../../store/selectors/domain.selector';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-variable-dialog',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableComponent {
  formState$: Observable<FormGroupState<Variable>>;
  submittedValue$: Observable<Variable | undefined>;

  constructor(private _store: Store<AppState>, protected router: Router) {
    this.formState$ = _store.pipe(select(s => s.variableForms.formState));
    this.submittedValue$ = _store.pipe(select(s => s.variableForms.submittedValue));
  }

  getDomains(): Observable<Domain[]> {
    return this._store.select(selectDomainList);
  }

  submit() {
    this.formState$
      .pipe(
        take(1),
        filter(s => s.isValid),
        map(fs => new SetSubmittedVariableAction(fs.value))
      )
      .subscribe(this._store);
    this.router.navigate(['variables']);
  }

  cancel() {
    this.router.navigate(['variables']);
  }
}
