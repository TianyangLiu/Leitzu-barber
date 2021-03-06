import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Client } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseUrl: string = "http://server.leitzu.com/api";

  private clientUrl: string = "clients";

  private recordUrl: string = "records";

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

  newClient(data){
    let body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${this.clientUrl}`, body, httpOptions);
  }

  updateClient(data): Observable<any>{
    let body = JSON.stringify(data);
    let id = data.id;
    return this.http.put(`${this.baseUrl}/${this.clientUrl}/${id}`, body, httpOptions);
  }

  renew(data, recharge){
    data["rechargeAmount"] = recharge;
    let body = JSON.stringify(data);
    let id = data.id;
    return this.http.put(`${this.baseUrl}/${this.clientUrl}/${id}`, body, httpOptions);
  }

  createRecord(data, clientId): Observable<any>{
    let body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${this.clientUrl}/${clientId}/${this.recordUrl}`, body, httpOptions);
  }

  updateRecord(data, clientId, recordId): Observable<any>{
    let body = JSON.stringify(data);
    return this.http.put(`${this.baseUrl}/${this.clientUrl}/${clientId}/${this.recordUrl}/${recordId}`, body, httpOptions);
  }

  deleteRecord(clientId, recordId): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${this.clientUrl}/${clientId}/${this.recordUrl}/${recordId}`, httpOptions);
  }

  deleteClient(clientId): Observable<any>{
    console.log(clientId);
    return this.http.delete(`${this.baseUrl}/${this.clientUrl}/${clientId}`, httpOptions);
  }

  searchClients(name): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}/search/${name}`);
  }

  getTotalValueStoredByClients(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}/storedValue/all`);
  }

  getDailyEvents(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}/nextContactEvents/all`);
  }

  
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
