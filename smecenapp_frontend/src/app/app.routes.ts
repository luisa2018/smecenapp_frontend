import { Routes } from '@angular/router';

import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';
import { DefineArchitectureComponent } from './pages/define-architecture/define-architecture.component';
import { CostVisibilityComponent } from './pages/cost-visibility/cost-visibility.component';
import { FinancialGoalComponent } from './pages/financial-goal/financial-goal.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {path:'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent , canActivate: [authGuard]  },
      {path: 'register', component: RegisterComponent},
      { path: 'basic-information', component: BasicInformationComponent},
      { path: 'financial-goal', component: FinancialGoalComponent},
      {path: 'define-architecture', component: DefineArchitectureComponent},
      { path: 'cost-visibility', component: CostVisibilityComponent, canActivate: [authGuard] },
      {path:'', redirectTo:'login',pathMatch:'full'},
    ]
  }
];
