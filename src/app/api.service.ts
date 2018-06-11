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

  redirectUrl: string;
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  doLogin(credentials) {
    return this.http.post(apiUrl, JSON.stringify(credentials), httpOptions);
    // return this.http.post('http://localhost/api/auth.php', {
    //   username,
    //   password
    // }).subscribe(data => {
    //   console.log(data, " is real!!");
    // })

  }
}
