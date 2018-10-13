import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://server.leitzu.com/api";

  constructor(private http: HttpClient) { }

  signup(formData){
    return this.http.post(`${this.baseUrl}/sign-up`, formData);
  }

  login(formData){
    return this.http.post(`${this.baseUrl}/login`, formData);
  }
}
