import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  resposeData: any;
  loginData =  {};
  userDataDetails: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    console.log(this.loginData);
    this.auth.doLogin(this.loginData, "login").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData))
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDataDetails = data.userData;
      }
    );
    if(this.loginData== 'admin' && this.loginData == 'admin'){

    }
    // event.preventDefault();
    // const target = event.target;
    // const username = target.querySelector('#username').value
    // const password = target.querySelector('#password').value
    // this.Auth.doLogin(username, password).then((result) => {
    //   this.resData = result;
    //   console.log(this.resData)
    //   if(this.resData.success){

    //   } else {
    //     window.alert("ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง!")
    //   }
    // });
  }

}
