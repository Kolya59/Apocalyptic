import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialog, MatListModule, MatTableModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { DomainsComponent } from './components/modal/domains/domains.component';
import { ExplanationComponent } from './components/modal/explanation/explanation.component';
import { ConsultationComponent } from './components/modal/consultation/consultation.component';
import { VariablesComponent } from './components/modal/variables/variables.component';
import { Store } from './core/store/store';
import { RuleListComponent } from './components/body/rule-list/rule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MenuComponent,
    RuleListComponent,
    DomainsComponent,
    ExplanationComponent,
    ConsultationComponent,
    VariablesComponent,
    RuleListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
  ],
  providers: [
    {
      provide: Store,
      useFactory: () => new Store(),
      deps: []
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

