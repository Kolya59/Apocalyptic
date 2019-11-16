import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Domain, IDomain } from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-domain-dialog',
  templateUrl: './domain-dialog.component.html',
  styleUrls: ['./domain-dialog.component.css']
})
export class DomainDialogComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private dialogRef: MatDialogRef<DomainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDomain
  ) {
    if (!this.data) {
      this.data = new Domain(
        Store.getUUID(),
        'Domain 1',
        '',
        ['Value 1', 'Value 2']);
    }
  }

  ngOnInit() {
  }

  drop(e: CdkDragDrop<string>) {
    const tmp = this.data.values[e.previousIndex];
    this.data.values[e.previousIndex] = this.data.values[e.currentIndex];
    this.data.values[e.currentIndex] = tmp;
  }

  insertValue(value: string) {
    // TODO Handle error
    this.data.insertValue(value);
  }

  editValue(index: number, value: string) {
    // TODO Handle error
    this.data.editValue(index, value);
  }

  removeValue(index: number) {
    // TODO Handle error
    this.data.removeValue(index);
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
