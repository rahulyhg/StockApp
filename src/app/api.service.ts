import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

let apiUrl = 'http://localhost:1234/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',

  })
};
//'Authorization': 'my-auth-token'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl: string;
  private isLoggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.isLoggedInStatus = value;
  }

  get isLoggedIn(){
    return this.isLoggedInStatus;
  }

  doLogin(credentials) {
    return this.http.post(apiUrl, JSON.stringify(credentials), httpOptions);
  }
}
