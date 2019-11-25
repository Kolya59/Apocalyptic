import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Domain, IDomain } from '../../../core/models';
import { Service } from '../../../core/service';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-domain-dialog',
  templateUrl: './domain-dialog.component.html',
  styleUrls: ['./domain-dialog.component.css']
})
export class DomainDialogComponent implements OnInit {
  options: FormGroup;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<DomainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDomain
  ) {
    if (!this.data) {
      this.data = new Domain(
        Store.getUUID(),
        'Domain 1',
        '',
        ['Value 1']);
    }
    this.options = fb.group({
      name: new FormControl(this.data.name, Validators.required),
      values: new FormArray(this.data.values.map(value => new FormControl(value)), Validators.required),
      description: new FormControl(this.data.description)
    });
  }

  ngOnInit() {
  }

  drop(e: CdkDragDrop<string>) {
    this.data.values = Service.reorder(e.previousIndex, e.currentIndex, this.data.values);
  }

  insertValue(value: string) {
    // TODO Handle error
    this.options.controls.values.value.push(new FormControl(this.data.values.length));
    this.data.insertValue(value);
  }

  removeValue(index: number) {
    // TODO Handle error
    this.data.removeValue(index);
  }

  submit() {
    this.data.name = this.options.controls.name.value;
    this.data.values = this.options.controls.values.value;
    this.data.description = this.options.controls.description.value;
  }

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
