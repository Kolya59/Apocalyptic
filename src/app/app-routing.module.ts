import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RuleListComponent } from './components/rules/rule-list/rule-list.component';
import { RuleComponent } from './components/rules/rule/rule.component';
import { StatementListComponent } from './components/statements/statement-list/statement-list.component';
import { StatementComponent } from './components/statements/statement/statement.component';
import { VariableListComponent } from './components/variables/variable-list/variable-list.component';
import { VariableComponent } from './components/variables/variable/variable.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
// import { ExplanationComponent } from './components/explanation/explanation.component';
import { TargetComponent } from './components/target/target.component';
import { LoadComponent } from './components/load/load.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoadComponent
  },
  { path: 'rules', component: RuleListComponent, canActivate: [] },
  {
    path: 'rules/:id',
    component: RuleComponent,
    canActivate: [],
    canDeactivate: []
  },
  { path: 'statements', component: StatementListComponent, canActivate: [] },
  {
    path: 'statements/:id',
    component: StatementComponent,
    canActivate: [],
    canDeactivate: []
  },
  { path: 'variables', component: VariableListComponent, canActivate: [] },
  {
    path: 'variables/:id',
    component: VariableComponent,
    canActivate: [],
    canDeactivate: []
  },
  { path: 'consultation', component: ConsultationComponent },
  // { path: 'explanation', component: ExplanationComponent },
  { path: 'target', component: TargetComponent, canActivate: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
