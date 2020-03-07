import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Domain } from '../../../models/domain';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-domain-dialog',
  templateUrl: './domain-dialog.component.html',
  styleUrls: ['./domain-dialog.component.css']
})
export class DomainDialogComponent {
  options: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<DomainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Domain
  ) {
    // TODO: Restore
    /*if (!this.data) {
      this.data = new Domain(
        Store.getUUID(),
        'Domain 1',
        '',
        ['Value 1']);
    }*/
    this.options = fb.group({
      name: this.fb.control(this.data.name, Validators.required),
      values: this.fb.array(this.data.values.map(value => this.fb.control(value))),
      description: this.fb.control(this.data.description)
    });
  }

  // TODO Check reorder
  drop(e: CdkDragDrop<string>) {
    this.options.controls.values.setValue(Service.reorder(e.previousIndex, e.currentIndex, this.options.controls.values.value));
  }

  insertValue(value: string) {
    // TODO Handle error
    (this.options.get('values') as FormArray).value.push(value);
    console.log(this.options.get('values').value);
  }

  removeValue(el: number) {
    // TODO Handle error
    (this.options.get('values') as FormArray).removeAt(el);
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
