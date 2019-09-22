import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { RuleTableComponent } from './components/body/rule-table/rule-table.component';
import {RulesComponent} from './components/modal/rules/rules.component';
import { DomainsComponent } from './components/modal/domains/domains.component';
import { DomainTableComponent } from './components/modal/domains/domain-table/domain-table.component';
import { DomainOperationsComponent } from './components/modal/domains/domain-operations/domain-operations.component';
import { DomainValuesComponent } from './components/modal/domains/domain-values/domain-values.component';
import { RulesTableComponent } from './components/modal/rules/rules-table/rules-table.component';
import { RulesConditionsComponent } from './components/modal/rules/rules-conditions/rules-conditions.component';
import { RulesConclusionsComponent } from './components/modal/rules/rules-conclusions/rules-conclusions.component';
import { ExplanationComponent } from './components/modal/explanation/explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    RuleTableComponent,
    RulesComponent,
    DomainsComponent,
    DomainTableComponent,
    DomainOperationsComponent,
    DomainValuesComponent,
    RulesTableComponent,
    RulesConditionsComponent,
    RulesConclusionsComponent,
    ExplanationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

