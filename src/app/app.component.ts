import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { CookieService } from 'ng-cookie/dist/cookie.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public location: Location, private cookie: CookieService, private router: Router) {}

    ngOnInit(){
    }

    isLogin(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 7 );
      if(path == titlee){
        return true;
      }
      else {
        return false;
      }
    }
}
