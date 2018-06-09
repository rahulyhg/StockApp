import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let apiUrl = 'http://localhost:1234/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  doLogin(credentials, type) {
    console.log(credentials);
    return this.http.post(apiUrl + type, JSON.stringify(credentials));
    // return this.http.post('http://localhost/api/auth.php', {
    //   username,
    //   password
    // }).subscribe(data => {
    //   console.log(data, " is real!!");
    // })

  }
}
