import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){ //post api user

    return new Promise((resolve, reject) => {
      let headers = new Headers();
        this.http.post('api/auth.php', {username, password})
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
