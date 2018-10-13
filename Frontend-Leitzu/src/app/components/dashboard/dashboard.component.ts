import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { ClientService } from 'src/app/services/client.service';

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

  public totalValueStoredByClients: number;

  public dailyEventsInfo: any[] = [];

  public isMonthlyExepenseLoaded = false;

  public isYearlyExepenseLoaded = false;

  public isMonthlyExpenseCountsLoaded = false;

  public isTotalValueStoredByClientsLoaded = false;

  public isDailyEventsLoaded = false;

  constructor(private client: ClientService, private expense: ExpenseService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.getMonthlyExepense();
    this.getYearlyExepense();
    this.getMonthlyExpenseCounts();
    this.getTotalValueStoredByClients();
    this.getDailyEvents();
  }

/***************************************************************************/

  getMonthlyExepense(){
    this.expense.getMonthlyExepense().subscribe(
      expense => this.handleGetMonthlyResponse(expense),
      error => console.log(error)
    );
  }

  handleGetMonthlyResponse(expense){
    this.monthlyExepense = expense;
    this.isMonthlyExepenseLoaded = true;
  }

/***************************************************************************/

  getYearlyExepense(){
    this.expense.getYearlyExepense().subscribe(
      expense => this.handleGetYearlyResponse(expense),
      error => console.log(error)
    );
  }

  handleGetYearlyResponse(expense){
    this.yearlyExepense = expense;
    this.isYearlyExepenseLoaded = true;
  }

/***************************************************************************/

  getMonthlyExpenseCounts(){
    this.expense.getMonthlyExpenseCounts().subscribe(
      expense => this.handleGetMonthlyExpenseCountsResponse(expense),
      error => console.log(error)
    );
  }

  handleGetMonthlyExpenseCountsResponse(expense){
    this.monthlyExpenseCounts = expense;
    this.isMonthlyExpenseCountsLoaded = true;
  }

/***************************************************************************/

  getTotalValueStoredByClients(){
    this.client.getTotalValueStoredByClients().subscribe(
      value => this.handleGetTotalValueStoredByClientsResponse(value),
      error => console.log(error)
    );
  }

  handleGetTotalValueStoredByClientsResponse(value){
    this.totalValueStoredByClients = value;
    this.isTotalValueStoredByClientsLoaded = true;
  }

/***************************************************************************/

  getDailyEvents(){
    this.client.getDailyEvents().subscribe(
      data => this.handleGetDailyEventsResponse(data),
      error => console.log(error)
    );
  }

  handleGetDailyEventsResponse(data){
    this.dailyEventsInfo = data.data;
    this.isDailyEventsLoaded = true;
  }

/***************************************************************************/

}
