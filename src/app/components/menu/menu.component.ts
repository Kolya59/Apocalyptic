import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IVariable } from '../../core/models';
import { Store } from '../../core/store';
import { VariableListDialogComponent } from '../modal/variable-list-dialog/variable-list-dialog.component';
import { SetTargetComponent } from '../modal/set-target/set-target.component';
import { ConsultationComponent } from '../modal/consultation/consultation.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public readonly dialog: MatDialog, private store: Store) {
  }

  openVariableDialog() {
    this.dialog
      .open(VariableListDialogComponent, {
        width: '80%',
        data: this.store.variables
      })
      .afterClosed()
      .subscribe((result: IVariable[] | null) => {
        if (!result) {
          return;
        }
        this.store.variables = result;
      });
  }

  openSetTargetDialog() {
    this.dialog
      .open(SetTargetComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe((result: IVariable) => {
        if (!result) {
          return;
        }
        this.store.target = result;
      });
  }

  openConsultDialog() {
    this.dialog
      .open(ConsultationComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe((result: IVariable) => {
        if (!result) {
          return;
        }
        alert(`${this.store.target.name} is ${result}`);
      });
  }

  openExplanationDialog() {
    this.dialog
      .open(ConsultationComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe(_ => {
      });
  }

  public ToJSON() {
    // TODO Validate
    console.log('Store', this.store.toJSON());
  }

  public FromJSON(input: string) {
    this.store.fromJSON(input);
  }
}
