import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service'
import { CookieService } from 'ng-cookie/dist/cookie.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginData =  {};
  resposeData: any;

  constructor(private auth: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.auth.doLogin(this.loginData, "login")
      .subscribe(
        res => {
          this.resposeData = JSON.parse(JSON.stringify(res));
          //console.log(this.resposeData.userData.UserID);
          this.cookie.set_cookie("UID", this.resposeData.userData.UserID,1);
          this.cookie.set_cookie("SSID", this.resposeData.userData.token, 1);
          if(this.resposeData.success){
            this.router.navigate(['/dashboard']);
            this.auth.isLoggedIn = true;
          }
        },
        err => console.log(err)
      )
  }

}
