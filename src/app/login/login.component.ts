import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../api.service'
import { CookieService } from 'ng-cookie/dist/cookie.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  resposeData: any;

  constructor(private auth: AuthService, private cookie: CookieService, private router: Router) {

  }

  ngOnInit() {
  }

  loginUser(){
    let jsonData = {
      name: 'generateToken',
      param: {
        email: this.user,
        password: this.pass
      }
    };
    this.auth.doLogin(jsonData)
      .subscribe(
        res => {
          this.resposeData = JSON.parse(JSON.stringify(res));
          console.log(res)
          try {
            if(this.resposeData.response.status == 200){
              localStorage.setItem('TokenID', this.resposeData.response.result.token);
              this.router.navigate(['home']);
            } else {
              this.router.navigate(['login']);
            }
          } catch (error) {
            console.log(res)
          }
        },
        err => { console.log(err);}
      );
  }

}
