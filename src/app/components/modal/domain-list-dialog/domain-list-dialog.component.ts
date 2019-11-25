import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { IDomain, IRule } from '../../../core/models';
import { Service } from '../../../core/service';
import { Store } from '../../../core/store';
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
  }

  ngOnInit(): void {}

  drop(e: CdkDragDrop<IRule>) {
    this.store.domains = Service.reorder(e.previousIndex, e.currentIndex, this.store.domains);
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  insertDomain() {
    this.dialog.open(DomainDialogComponent, {
      width: '80%',
      data: null
    }).afterClosed().subscribe((result: IDomain | null) => {
      if (!result) {
        return;
      }
      this.store.domains.push(result);
    });
  }

  editDomain(domain: IDomain) {
    this.dialog.open(DomainDialogComponent, {
      width: '80%',
      data: domain
    }).afterClosed().subscribe((result: IDomain | null) => {
      if (!result) {
        return;
      }
      this.store.domains[this.store.domains.indexOf(domain)] = result;
    });
  }

  removeDomain(domain: IDomain) {
    // TODO Confirm removing
    this.store.removeDomain(domain.id);
  }

}
