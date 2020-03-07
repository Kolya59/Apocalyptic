import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Variable } from '../../models/variable';
import { ConsultationService } from '../../services/service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  userDialogStore: string[];
  currentQuestedVariable: Variable;
  options: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly consultant: ConsultationService,
    private dialogRef: MatDialogRef<ConsultationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variable
  ) {
    // TODO Take out
    this.currentQuestedVariable = this.data;
    this.options = fb.group({
      chosenValue: fb.control(this.data)
    });
    this.userDialogStore.push(this.currentQuestedVariable.requestMsg);
  }

  setAnswer() {
    // TODO Push to the working memory
    this.userDialogStore.push(this.options.get('chosenValue').value);
  }

  async getNextVariable() {
    // TODO Lock it
    this.consultant.requestedVariableSub.subscribe(next => {
      this.userDialogStore.push(next.requestMsg);
      // TODO Wait to request executing
      // TODO Pass result to next
      this.consultant.requestResultSub.next();
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
