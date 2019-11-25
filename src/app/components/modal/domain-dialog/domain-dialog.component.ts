import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { element } from 'protractor';
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
      name: this.fb.control(this.data.name, Validators.required),
      values: this.fb.array(this.data.values.map(value => this.fb.control(value))),
      description: this.fb.control(this.data.description)
    });
    // @ts-ignore
    window.data = this.data;
    // @ts-ignore
    window.options = this.options;
  }

  ngOnInit() {
  }

  drop(e: CdkDragDrop<string>) {
    this.data.values = Service.reorder(e.previousIndex, e.currentIndex, this.data.values);
  }

  insertValue(value: string) {
    // TODO Handle error
    (this.options.controls.values as FormArray).value.push(value);
    this.data.insertValue(value);
    console.log(this.options.controls.values.value, this.data.values);
  }

  removeValue(el: string) {
    // TODO Handle error
    this.options.controls.values = this.fb.array(
      Service.remove(el, this.options.controls.values.value)
    );
    this.data.values = Service.remove(el, this.data.values);
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
