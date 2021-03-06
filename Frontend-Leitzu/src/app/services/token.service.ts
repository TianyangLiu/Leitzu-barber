import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://server.leitzu.com/api/login',
    signup: 'http://server.leitzu.com/api/sign-up'
  }

  constructor() { }

  handle(token){
    this.set(token);
  }

  set(token){
    localStorage.setItem('access_token', token);
  }

  get(){
    return localStorage.getItem('access_token');
  }

  remove(){
    localStorage.removeItem('access_token');
  }

  isValid(){
    const token = this.get();

    if(token){
      const payload = this.payload(token);

      return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
    }

    return false;
  }

  payload(token){
    const payload = token.split('.')[1];

    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
