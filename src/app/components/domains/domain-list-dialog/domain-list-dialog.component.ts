import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Domain } from '../../../models/domain';
import { Rule } from '../../../models/rule';
import { Service } from '../../../services/service';
import { DomainDialogComponent } from '../domain-dialog/domain-dialog.component';

@Component({
  selector: 'app-domains',
  templateUrl: './domain-list-dialog.component.html',
  styleUrls: ['./domain-list-dialog.component.css']
})
export class DomainListDialogComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DomainListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Domain[]
  ) {
  }

  drop(e: CdkDragDrop<Rule>): void {
    // TODO Restore
    // this.store.domains = Service.reorder(e.previousIndex, e.currentIndex, this.store.domains);
  }

  insertDomain(): void {
    this.dialog
      .open(DomainDialogComponent, {
        width: '80%',
        data: null
      })
      .afterClosed()
      .subscribe((result: Domain | null) => {
        if (!result) {
          return;
        }
        this.data.push(result);
      });
  }

  editDomain(domain: Domain): void {
    this.dialog
      .open(DomainDialogComponent, {
        width: '80%',
        data: domain
      })
      .afterClosed()
      .subscribe((result: Domain | null) => {
        if (!result) {
          return;
        }
        this.data[this.data.indexOf(domain)] = result;
      });
  }

  removeDomain(domain: Domain): void {
    // TODO Confirm removing
    this.data = Service.remove(domain, this.data);
  }

  save(): void {
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}