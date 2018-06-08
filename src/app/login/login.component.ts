import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  resData: any;

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username, password).then((result) => {
      this.resData = result;
      console.log(this.resData)
      if(this.resData.success){

      } else {
        window.alert("ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง!")
      }
    });
  }

}
