import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../api.service'
import { CookieService } from 'ng-cookie/dist/cookie.service';
import { Router, NavigationExtras } from '@angular/router';
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
    //console.log(jsonData);
    this.auth.doLogin(jsonData)
      .subscribe(
        res => {
          this.resposeData = JSON.parse(JSON.stringify(res));
          console.log(this.resposeData);
          // this.cookie.set_cookie("UID", this.resposeData.userData.UserID,1);
          // this.cookie.set_cookie("SSID", this.resposeData.userData.token, 1);
          //console.log(this.cookie.get_cookie("UID"),this.cookie.get_cookie("SSID"));
          if(this.resposeData.response.status == 200){
            console.log(this.resposeData)
            this.router.navigate(['/home']);
            this.auth.setLoggedIn(true);
          } else {
            this.router.navigate(['/login']);
            this.auth.setLoggedIn(false);
          }
        },
        err => { console.log(err); this.auth.setLoggedIn(false);}
      );
  }

}
