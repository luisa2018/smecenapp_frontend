import { Routes } from '@angular/router';

import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';
import { DefineArchitectureComponent } from './pages/define-architecture/define-architecture.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {path:'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent , canActivate: [authGuard]  },
      {path: 'register', component: RegisterComponent},
      { path: 'basic-information', component: BasicInformationComponent},
      {path: 'define-architecture', component: DefineArchitectureComponent},
      {path:'', redirectTo:'login',pathMatch:'full'},
    ]
  }
];
