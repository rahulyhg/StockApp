import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

let apiUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  redirectUrl: string;
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  doLogin(credentials) {
    return this.http.post(apiUrl, JSON.stringify(credentials));
    // return this.http.post('http://localhost/api/auth.php', {
    //   username,
    //   password
    // }).subscribe(data => {
    //   console.log(data, " is real!!");
    // })

  }
}
