import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/menu/menu.component';
import { DomainDialogComponent } from './components/modal/domain-dialog/domain-dialog.component';
import { DomainListDialogComponent } from './components/modal/domain-list-dialog/domain-list-dialog.component';
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
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RuleEffects } from './store/effects/rule.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { RuleService } from './services/rule.service';
import { DomainEffects } from './store/effects/domain.effects';
import { StatementEffects } from './store/effects/statement.effects';
import { VariableEffects } from './store/effects/variable.effects';
import { StatementService } from './services/statement.service';
import { VariableService } from './services/variable.service';
import { DomainService } from './services/domain.service';

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
    SetTargetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgrxFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([DomainEffects, RuleEffects, StatementEffects, VariableEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    DomainService,
    RuleService,
    StatementService,
    VariableService,
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
    DomainDialogComponent,
    DomainListDialogComponent,
    RuleDialogComponent,
    SetTargetComponent,
    StatementDialogComponent,
    VariableDialogComponent,
    VariableListDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

