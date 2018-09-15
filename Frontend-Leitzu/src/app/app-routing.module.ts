import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecordsComponent } from './components/records/records.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    //canActivate: [BeforeLoginService]
  },

  {
    path: 'clients',
    component: ClientsComponent,
    //canActivate: [BeforeLoginService]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
