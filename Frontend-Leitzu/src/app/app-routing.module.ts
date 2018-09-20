import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecordsComponent } from './components/records/records.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestPasswordResetComponent } from './components/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/response-password-reset/response-password-reset.component';

const appRoutes: Routes = [
  {
  path: '',
    component: LoginComponent,
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'sign-up',
    component: SignUpComponent,
    //canActivate: [AfterLoginService]
  },

  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [AfterLoginService]
  },

  {
    path: 'request-password-reset',
    component: RequestPasswordResetComponent,
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'response-password-reset',
    component: ResponsePasswordResetComponent,
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'dashboard',
    component: DashboardComponent
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'clients',
    component: ClientsComponent
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'clients/:id',
    component: ClientComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
