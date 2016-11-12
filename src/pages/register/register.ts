import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { SSFUsersRest } from '../../providers/ssf-users-rest';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
              public usersRest: SSFUsersRest
             ) {
    this.navCtrl = navCtrl; 
}
  
  user = {};
   
    register(form) {
     if(form.invalid) 
         return alert("Please fill in all of the required fields.");
   
    this.usersRest.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      console.log("Warning Will Robinson!");
    });
  }

}
