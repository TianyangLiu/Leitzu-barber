import { Component, OnInit } from '@angular/core';
import { Expenses } from '../../interfaces/expenses';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { ClientService } from '../../services/client.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  public clientId = null;

  public clientName: string;

  public activity_cost: number = null;

  public receipt_date: Date = null;

  public isDataLoaded = false;

  public expenseForm = {
    client_id: null,
    receipt_date: null,
    activity_cost: null
  }

  public error = {
    activity_cost: null,
    receipt_date: null
  };

  constructor(
    private client: ClientService,
    private expense: ExpenseService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.clientId = params['id']; });

    this.client.getClient(this.clientId).subscribe(clientInfo => {
      clientInfo = this.handleGetClientResponse(clientInfo);
    });
  }

  handleGetClientResponse(clientInfo){
    this.clientName = clientInfo.data.name;
    this.isDataLoaded = true;
  }

  back(){
    this._location.back();
  }

  onSubmit(){
    this.error = {
      activity_cost: null,
      receipt_date: null
    };

    this.expenseForm.client_id = this.clientId;
    this.expenseForm.activity_cost = this.activity_cost;
    this.expenseForm.receipt_date = this.receipt_date;

    this.expense.createExpense(this.expenseForm, this.clientId).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  handleResponse(data){
    this.router.navigateByUrl(`/clients/${this.clientId}/expenses`);
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
