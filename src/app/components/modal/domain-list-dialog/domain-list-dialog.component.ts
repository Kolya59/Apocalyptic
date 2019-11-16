import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { IDomain, IRule } from '../../../core/models';
import { Store } from '../../../core/store/store';
import { DomainDialogComponent } from '../domain-dialog/domain-dialog.component';

@Component({
  selector: 'app-domains',
  templateUrl: './domain-list-dialog.component.html',
  styleUrls: ['./domain-list-dialog.component.css']
})
export class DomainListDialogComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DomainListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDomain[]
  ) {
    store.insertDomain('Domain 1', '', ['Value 1', 'Value 2']);
    store.insertDomain('Domain 2', '', ['Value 1', 'Value 2']);
    store.insertDomain('Domain 3', '', ['Value 1', 'Value 2']);
  }

  ngOnInit(): void {}

  drop(e: CdkDragDrop<IRule>) {
    const tmp = this.store.domains[e.previousIndex];
    this.store.domains[e.previousIndex] = this.store.domains[e.currentIndex];
    this.store.domains[e.currentIndex] = tmp;
  }

  save() {
    // TODO Save changes
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  insertDomain() {
    this.dialog.open(DomainDialogComponent, {
      width: '500px',
      data: null
    });
  }

  editDomain(domain: IDomain) {
    this.dialog.open(DomainDialogComponent, {
      width: '500px',
      data: domain
    });
  }

  removeDomain(domain: IDomain) {
    // TODO Confirm removing
    this.store.removeDomain(domain.id);
  }

}
