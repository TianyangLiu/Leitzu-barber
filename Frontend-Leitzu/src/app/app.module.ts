import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RecordsComponent } from './components/records/records.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestPasswordResetComponent } from './components/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/response-password-reset/response-password-reset.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { RenewComponent } from './components/renew/renew.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    RecordsComponent,
    ExpensesComponent,
    DashboardComponent,
    ClientComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    RequestPasswordResetComponent,
    ResponsePasswordResetComponent,
    NewClientComponent,
    RenewComponent,
    NewExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
