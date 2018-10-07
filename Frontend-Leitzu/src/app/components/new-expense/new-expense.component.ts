import { Component, OnInit } from '@angular/core';
import { Expenses } from '../../interfaces/expenses';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  public clientId = null;

  public clientName: string;

  public expenseForm = {
    id: null,
    client_id: null,
    activity_cost: null
  }

  public error = {
    activity_cost: null,
  };

  public temp_err = null;

  constructor(
    private client: ClientService,
    private expense: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.clientId = params['id']; });

    this.client.getClient(this.clientId).subscribe(clientInfo => {
      this.clientName = clientInfo.data.name;
    });
  }

  back(){
    this.router.navigateByUrl('/clients');
  }

  onSubmit(){
    this.expenseForm.client_id = this.clientId;

    this.expense.createExpense(this.expenseForm, this.clientId).subscribe(
      data => this.handleResponse(),
      error => this.handleError(error)
    );

  }

  handleResponse(){
    this.router.navigateByUrl(`/clients/${this.clientId}/expenses`);
  }

  handleError(error){
    if(error.error.errors){
      this.temp_err = 1;
    }
    this.error = error.error.errors;
  }

}
