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

  constructor(private client: ClientService, private expense: ExpenseService) { }

  ngOnInit() {
    this.currentDate = new Date();

    this.getMonthlyExepense();
    this.getYearlyExepense();
    this.getMonthlyExpenseCounts();
    this.getTotalValueStoredByClients();
    this.getDailyEvents();
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

  getTotalValueStoredByClients(){
    this.client.getTotalValueStoredByClients().subscribe(
      value => this.totalValueStoredByClients = value,
      error => console.log(error)
    );
  }

  getDailyEvents(){
    this.client.getDailyEvents().subscribe(
      data => this.dailyEventsInfo = data.data,
      error => console.log(error)
    );

    
  }

}
