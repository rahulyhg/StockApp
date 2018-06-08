import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = 'http://localhost/stockApp/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doLogin(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + type, credentials)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
    // return this.http.post('http://localhost/api/auth.php', {
    //   username,
    //   password
    // }).subscribe(data => {
    //   console.log(data, " is real!!");
    // })

  }
}
