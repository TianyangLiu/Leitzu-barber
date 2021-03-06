import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl: string = "http://server.leitzu.com/api";

  private clientUrl: string = "clients";

  private expenseUrl: string = "expenses";

  constructor(private http: HttpClient) { }

  getExpenses(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }

  createExpense(data, clientId): Observable<any>{
    let body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${this.clientUrl}/${clientId}/${this.expenseUrl}`, body, httpOptions);
  }

  getMonthlyExepense(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.expenseUrl}/current-month`);
  }

  getYearlyExepense(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.expenseUrl}/current-year`);
  }

  getMonthlyExpenseCounts(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.expenseUrl}/current-month/counts`);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
