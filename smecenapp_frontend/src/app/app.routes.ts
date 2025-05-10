import { Routes } from '@angular/router';

import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {path:'login', component: LoginComponent},
      {path:'', redirectTo:'login',pathMatch:'full'},
    ]
  }
];
