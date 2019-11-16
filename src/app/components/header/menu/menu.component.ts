import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '../../../core/store/store';
import { DomainListDialogComponent } from '../../modal/domain-list-dialog/domain-list-dialog.component';
import { VariableListDialogComponent } from '../../modal/variable-list-dialog/variable-list-dialog.component';

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
    const dialogRef = this.dialog.open(DomainListDialogComponent, {
      width: '80%',
      data: {}
    });
  }

  openVariableDialog() {
    const dialogRef = this.dialog.open(VariableListDialogComponent, {
      width: '80%',
      data: {}
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
