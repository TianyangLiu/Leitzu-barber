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
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { NewClientComponent } from './components/new-client/new-client.component';
import { RenewComponent } from './components/renew/renew.component';

const appRoutes: Routes = [
  {
  path: '',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'request-password-reset',
    component: RequestPasswordResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'response-password-reset',
    component: ResponsePasswordResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'clients/new-client',
    component: NewClientComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'clients/:id/renew',
    component: RenewComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'clients/:id',
    component: ClientComponent,
    canActivate: [AfterLoginService]
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
