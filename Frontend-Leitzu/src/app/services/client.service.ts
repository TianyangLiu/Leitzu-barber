import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseUrl: string = "http://localhost:8000/api";

  private clientUrl: string = "clients";

  constructor(private http: HttpClient) { }

  getClients(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}`);
  }

  getSingleClient(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.clientUrl}/${id}`);
  }

  getRequiredPage(apiPath: string): Observable<any>{
    return this.http.get<any>(apiPath);
  }
}
