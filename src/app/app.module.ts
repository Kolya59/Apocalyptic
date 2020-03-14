import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExplanationComponent } from './components/modal/explanation/explanation.component';
import { ConsultationComponent } from './components/modal/consultation/consultation.component';
import { VariableDialogComponent } from './components/modal/variable-dialog/variable-dialog.component';
import { VariableListDialogComponent } from './components/modal/variable-list-dialog/variable-list-dialog.component';
import { ConsultationService, Service } from './core/service';
import { Store } from './core/store';
import { RuleListComponent } from './components/body/rule-list/rule-list.component';
import { MaterialModule } from './module/material-module';
import { RuleDialogComponent } from './components/modal/rule-dialog/rule-dialog.component';
import { StatementDialogComponent } from './components/modal/statement-dialog/statement-dialog.component';
import { SetTargetComponent } from './components/modal/set-target/set-target.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MenuComponent,
    RuleListComponent,
    ExplanationComponent,
    ConsultationComponent,
    VariableListDialogComponent,
    VariableDialogComponent,
    RuleDialogComponent,
    StatementDialogComponent,
    SetTargetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: Store,
      useValue: new Store(),
      deps: []
    },
    {
      provide: Service,
      useValue: new Service(),
      deps: []
    },
    {
      provide: ConsultationService,
      useValue: new ConsultationService(new Store()),
      deps: []
    },
    {
      provide: MatDialogRef,
      useValue: []
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: []
    },
    {
      provide: FormBuilder,
      useValue: new FormBuilder()
    }

  ],
  entryComponents: [
    ConsultationComponent,
    ExplanationComponent,
    RuleDialogComponent,
    SetTargetComponent,
    StatementDialogComponent,
    VariableDialogComponent,
    VariableListDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

