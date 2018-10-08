import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentDate;

  public monthlyExepense: number;

  public yearlyExepense: number;

  public monthlyExpenseCounts: number;

  constructor(private expense: ExpenseService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.getMonthlyExepense();
    this.getYearlyExepense();
    this.getMonthlyExpenseCounts();
  }

  getMonthlyExepense(){
    this.expense.getMonthlyExepense().subscribe(
      expense => this.monthlyExepense = expense,
      error => console.log(error)
    );
  }

  getYearlyExepense(){
    this.expense.getYearlyExepense().subscribe(
      expense => this.yearlyExepense = expense,
      error => console.log(error)
    );
  }

  getMonthlyExpenseCounts(){
    this.expense.getMonthlyExpenseCounts().subscribe(
      expense => this.monthlyExpenseCounts = expense,
      error => console.log(error)
    );
  }

}
