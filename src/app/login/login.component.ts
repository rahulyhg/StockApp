import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service'
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

  constructor(private auth: ApiService, private cookie: CookieService, private router: Router) {

  }

  ngOnInit() {
  }

  loginUser(){
    let jsonData = {
      name: 'generateToken',
      parm: {
        email: this.user,
        password: this.pass
      }
    };
    console.log(jsonData);
    // this.auth.doLogin(null)
    //   .subscribe(
    //     res => {
    //       this.resposeData = JSON.parse(JSON.stringify(res));
    //       //console.log(this.resposeData.userData.UserID, this.resposeData.userData.token);
    //       this.cookie.set_cookie("UID", this.resposeData.userData.UserID,1);
    //       this.cookie.set_cookie("SSID", this.resposeData.userData.token, 1);
    //       //console.log(this.cookie.get_cookie("UID"),this.cookie.get_cookie("SSID"));
    //       if(this.resposeData.success){
    //         this.router.navigate(['/dashboard']);
    //         this.auth.isLoggedIn = true;
    //       }
    //     },
    //     err => console.log(err)
    //   );
  }

}
