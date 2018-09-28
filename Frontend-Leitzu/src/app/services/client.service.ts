import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Client } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseUrl: string = "http://localhost:8000/api";

  private clientUrl: string = "clients";

  constructor(private http: HttpClient) { }

  // all clients
  getClients(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}`);
  }

  // single client detail
  getClient(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}/${id}`);
  }

  getRequiredPage(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }

  getRecords(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }

  getExpenses(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }

  newClient(data){
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(`${this.baseUrl}/${this.clientUrl}`, body, httpOptions);
  }

  updateClient(data){
    let body = JSON.stringify(data);
    let id = data.id;
    return this.http.put(`${this.baseUrl}/${this.clientUrl}/${id}`, body, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
