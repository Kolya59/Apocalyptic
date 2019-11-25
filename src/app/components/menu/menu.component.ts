import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IDomain, IVariable } from '../../core/models';
import { Store } from '../../core/store';
import { DomainListDialogComponent } from '../modal/domain-list-dialog/domain-list-dialog.component';
import { VariableListDialogComponent } from '../modal/variable-list-dialog/variable-list-dialog.component';
import { SetTargetComponent } from '../modal/set-target/set-target.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public readonly dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit() {
  }

  openDomainDialog() {
    this.dialog.open(DomainListDialogComponent, {
      width: '80%',
      data: this.store.variables
    }).afterClosed().subscribe((result: IDomain[] | null) => {
      if (!result) {
        return;
      }
      this.store.domains = result;
    });
  }

  openVariableDialog() {
    this.dialog.open(VariableListDialogComponent, {
      width: '80%',
      data: this.store.variables
    }).afterClosed().subscribe((result: IVariable[] | null) => {
      if (!result) {
        return;
      }
      this.store.variables = result;
    });
  }

  openSetTargetDialog() {
    this.dialog.open(SetTargetComponent, {
      width: '80%',
      data: this.store.target
    }).afterClosed().subscribe((result: IVariable) => {
      if (!result) {
        return;
      }
      this.store.target = result;
    });
  }

  openConsultDialog() {

  }

  openExplanationDialog() {

  }

  public ToJSON() {
    // TODO Validate
    console.log('Store', this.store.toJSON());
  }

  public FromJSON(input: string) {
    this.store.fromJSON(input);
  }
}
