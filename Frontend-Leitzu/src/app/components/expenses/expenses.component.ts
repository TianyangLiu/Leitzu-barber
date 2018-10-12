import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { ClientService } from '../../services/client.service';
import { Expenses } from '../../interfaces/expenses';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public id: number = -1;

  public clientName: string;
  
  public expenses: Expenses[] = [];

  public totalExpense: number[] =[];

  constructor
  (
    private client: ClientService,
    private expense: ExpenseService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id']; });

    this.client.getClient(this.id).subscribe(clientInfo => {

      this.clientName = clientInfo.data.name;

      this.expense.getExpenses(clientInfo.data.href.expenses).subscribe(expenses => {
          this.expenses = expenses.data;
      });

    }); // end getClient
  }

  back(){
    //this.router.navigateByUrl('/clients');
    this._location.back();
  }

}
