import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { SSFUsersRest } from '../../providers/ssf-users-rest';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage{

  constructor(public navCtrl: NavController, public usersRest: SSFUsersRest) {
    this.navCtrl = navCtrl; 
    
  }
  
  user = {
    email: "aaa@aaa.com",
    password: "aaa"
};


  signinForm(form) {
     if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       
    this.usersRest.login(this.user)
    .map(res => res.json())
      .subscribe(
        res => {
          window.localStorage.setItem('token', res.id);
          window.localStorage.setItem('userId', res.userId);
          this.navCtrl.setRoot(LobbyPage);
        },
        err => {
      alert("Error!");
    });
  }
}
