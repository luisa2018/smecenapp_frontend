import { Routes } from '@angular/router';

import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {path:'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent , canActivate: [authGuard]  },
      {path: 'register', component: RegisterComponent},
      {path:'', redirectTo:'login',pathMatch:'full'},
    ]
  }
];
