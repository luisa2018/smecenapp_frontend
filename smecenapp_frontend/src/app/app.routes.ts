import { Routes } from '@angular/router';

import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {path:'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent },
      {path:'', redirectTo:'login',pathMatch:'full'},
    ]
  }
];
