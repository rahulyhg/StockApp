import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import * as $ from 'jquery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
//'Authorization': 'my-auth-token'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      }
    });
    return next.handle(tokenizedReq);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:1234/api/';

  constructor(private http: HttpClient) { }

  doLogin(credentials) {
    return this.http.post(this.apiUrl, credentials, httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('TokenID');
  }

  logOut() {
    localStorage.removeItem('TokenID')
  }

  getToken() {
    return localStorage.getItem('TokenID');
  }
}
