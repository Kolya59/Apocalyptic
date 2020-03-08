import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DomainListComponent } from './components/domains/domain-list/domain-list.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { VariableComponent } from './components/variables/variable/variable.component';
import { VariableListComponent } from './components/variables/variable-list/variable-list.component';
import { ConsultationService, Service } from './services/service';
import { RuleListComponent } from './components/rules/rule-list/rule-list.component';
import { MaterialModule } from './module/material-module';
import { RuleComponent } from './components/rules/rule/rule.component';
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
import { StatementListComponent } from './components/statements/statement-list/statement-list.component';
import { StatementComponent } from './components/statements/statement/statement.component';
import { LoadComponent } from './components/load/load.component';
import { DomainComponent } from './components/domains/domain/domain.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RuleListComponent,
    DomainListComponent,
    ExplanationComponent,
    ConsultationComponent,
    VariableListComponent,
    VariableComponent,
    RuleComponent,
    StatementComponent,
    TargetComponent,
    DomainComponent,
    DomainListComponent,
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
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
      app: appReducers
    }),
    EffectsModule.forRoot([DomainEffects, RuleEffects, StatementEffects, VariableEffects]),
    StoreRouterConnectingModule,
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
    DomainComponent,
    DomainListComponent,
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
