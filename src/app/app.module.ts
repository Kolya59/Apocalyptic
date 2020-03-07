import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/menu/menu.component';
import { DomainDialogComponent } from './components/domains/domain-dialog/domain-dialog.component';
import { DomainListDialogComponent } from './components/domains/domain-list-dialog/domain-list-dialog.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { VariableDialogComponent } from './components/variables/variable-dialog/variable-dialog.component';
import { VariableListDialogComponent } from './components/variables/variable-list-dialog/variable-list-dialog.component';
import { ConsultationService, Service } from './services/service';
import { RuleListComponent } from './components/rules/rule-list/rule-list.component';
import { MaterialModule } from './module/material-module';
import { RuleDialogComponent } from './components/rules/rule-dialog/rule-dialog.component';
import { StatementDialogComponent } from './components/statements/statement-dialog/statement-dialog.component';
import { TargetComponent } from './components/target/target.component';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RuleEffects } from './store/effects/rule.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { RuleService } from './services/rule.service';
import { DomainEffects } from './store/effects/domain.effects';
import { StatementEffects } from './store/effects/statement.effects';
import { VariableEffects } from './store/effects/variable.effects';
import { StatementService } from './services/statement.service';
import { VariableService } from './services/variable.service';
import { DomainService } from './services/domain.service';
import { RouterModule } from '@angular/router';
import { DomainsComponent } from './components/domains/domains/domains.component';
import { DomainListComponent } from './components/domains/domain-list/domain-list.component';
import { RuleComponent } from './components/rules/rule/rule.component';
import { StatementListComponent } from './components/statements/statement-list/statement-list.component';
import { StatementComponent } from './components/statements/statement/statement.component';
import { VariableComponent } from './components/variables/variable/variable.component';
import { VariableListComponent } from './components/variables/variable-list/variable-list.component';
import { LoadComponent } from './components/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
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
    TargetComponent,
    DomainsComponent,
    DomainListComponent,
    RuleComponent,
    StatementListComponent,
    StatementComponent,
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
    StoreModule.forRoot({
      router: routerReducer,
      app: appReducers
    }),
    EffectsModule.forRoot([DomainEffects, RuleEffects, StatementEffects, VariableEffects]),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    DomainService,
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
    ExplanationComponent,
    DomainDialogComponent,
    DomainListDialogComponent,
    RuleDialogComponent,
    TargetComponent,
    StatementDialogComponent,
    VariableDialogComponent,
    VariableListDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
