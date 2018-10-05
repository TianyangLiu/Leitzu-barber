import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl: string = "http://localhost:8000/api";

  private clientUrl: string = "clients";

  private expenseUrl: string = "expenses";

  constructor(private http: HttpClient) { }

  getExpenses(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }

  createExpense(data, clientId){
    let body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${this.clientUrl}/${clientId}/${this.expenseUrl}`, body, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
