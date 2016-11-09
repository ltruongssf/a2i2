import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl; 
    
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  user = {};
  signinForm(form) {
    if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       else if (form.valid) { 
            this.navCtrl.push(LobbyPage);
     }
} 
}