import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = 'http://localhost/stockApp/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  doLogin(credentials, type) {
    return this.http.post<any>(apiUrl + type, credentials);
    // return this.http.post('http://localhost/api/auth.php', {
    //   username,
    //   password
    // }).subscribe(data => {
    //   console.log(data, " is real!!");
    // })

  }
}
