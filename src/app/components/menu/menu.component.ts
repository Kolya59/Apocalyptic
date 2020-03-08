import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Variable } from '../../models/variable';
import { Domain } from '../../models/domain';
import { DomainListComponent } from '../domains/domain-list/domain-list.component';
import { VariableListComponent } from '../variables/variable-list/variable-list.component';
import { TargetComponent } from '../target/target.component';
import { ConsultationComponent } from '../consultation/consultation.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public readonly dialog: MatDialog) {
  }

  openDomainDialog() {
    // TODO: Restore
    /*this.dialog
      .open(DomainListComponent, {
        width: '80%',
        data: this.store.variables
      })
      .afterClosed()
      .subscribe((result: Domain[] | null) => {
        if (!result) {
          return;
        }
        this.store.domains = result;
      });*/
  }

  openVariableDialog() {
    // TODO: Restore
    /*this.dialog
      .open(VariableListComponent, {
        width: '80%',
        data: this.store.variables
      })
      .afterClosed()
      .subscribe((result: Variable[] | null) => {
        if (!result) {
          return;
        }
        this.store.variables = result;
      });*/
  }

  openSetTargetDialog() {
    // TODO: Restore
    /*this.dialog
      .open(TargetComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe((result: Variable) => {
        if (!result) {
          return;
        }
        this.store.target = result;
      });*/
  }

  openConsultDialog() {
    // TODO: Restore
    /*this.dialog
      .open(ConsultationComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe((result: Variable) => {
        if (!result) {
          return;
        }
        alert(`${this.store.target.name} is ${result}`);
      });*/
  }

  openExplanationDialog() {
    // TODO: Restore
    /*this.dialog
      .open(ConsultationComponent, {
        width: '80%',
        data: this.store.target
      })
      .afterClosed()
      .subscribe(_ => {});*/
  }

  // TODO: Restore
  /*public ToJSON() {
    // TODO Validate
    console.log('Store', this.store.toJSON());
  }

  // TODO: Restore
  public FromJSON(input: string) {
    this.store.fromJSON(input);
  }*/
}
