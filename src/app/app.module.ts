import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
// import { ExplanationComponent } from './components/explanation/explanation.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { VariableComponent } from './components/variables/variable/variable.component';
import { VariableListComponent } from './components/variables/variable-list/variable-list.component';
import { ConsultationService, Service } from './services/service';
import { RuleListComponent } from './components/rules/rule-list/rule-list.component';
import { MaterialModule } from './module';
import { RuleComponent } from './components/rules/rule/rule.component';
import { TargetComponent } from './components/target/target.component';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { appReducers } from './store/reducers/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { RuleService } from './services/rule.service';
import { StatementService } from './services/statement.service';
import { VariableService } from './services/variable.service';
import { StatementListComponent } from './components/statements/statement-list/statement-list.component';
import { StatementComponent } from './components/statements/statement/statement.component';
import { LoadComponent } from './components/load/load.component';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    RuleListComponent,
    // ExplanationComponent,
    ConsultationComponent,
    VariableListComponent,
    VariableComponent,
    RuleComponent,
    StatementComponent,
    TargetComponent,
    RuleComponent,
    StatementListComponent,
    VariableComponent,
    VariableListComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgrxFormsModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    RuleService,
    StatementService,
    VariableService,
    {
      provide: Service,
      useValue: new Service(),
      deps: []
    },
    {
      provide: ConsultationService,
      useValue: new ConsultationService(),
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
    // ExplanationComponent,
    RuleComponent,
    TargetComponent,
    StatementComponent,
    VariableComponent,
    VariableListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
