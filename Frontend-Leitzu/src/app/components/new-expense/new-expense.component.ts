import { Component, OnInit } from '@angular/core';
import { Expenses } from '../../interfaces/expenses';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  public clientId = -1;

  public expenseForm = {
    clientId: null,
    activity_cost: null
  }

  constructor(
    private expense: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.clientId = params['id']; });
  }

}
