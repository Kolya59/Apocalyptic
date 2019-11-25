import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { DomainDialogComponent } from './components/modal/domain-dialog/domain-dialog.component';
import { DomainListDialogComponent } from './components/modal/domain-list-dialog/domain-list-dialog.component';
import { ExplanationComponent } from './components/modal/explanation/explanation.component';
import { ConsultationComponent } from './components/modal/consultation/consultation.component';
import { VariableDialogComponent } from './components/modal/variable-dialog/variable-dialog.component';
import { VariableListDialogComponent } from './components/modal/variable-list-dialog/variable-list-dialog.component';
import { Service } from './core/service';
import { Store } from './core/store';
import { RuleListComponent } from './components/body/rule-list/rule-list.component';
import { MaterialModule } from './module/material-module';
import { RuleDialogComponent } from './components/modal/rule-dialog/rule-dialog.component';
import { StatementDialogComponent } from './components/modal/statement-dialog/statement-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MenuComponent,
    RuleListComponent,
    DomainListDialogComponent,
    DomainDialogComponent,
    ExplanationComponent,
    ConsultationComponent,
    VariableListDialogComponent,
    VariableDialogComponent,
    RuleDialogComponent,
    StatementDialogComponent,
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
    DomainDialogComponent,
    DomainListDialogComponent,
    RuleDialogComponent,
    StatementDialogComponent,
    VariableDialogComponent,
    VariableListDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

