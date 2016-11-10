import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { SSFUsersRest } from '../providers/ssf-users-rest';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage{

  constructor(public navCtrl: NavController, public userRest: SSFUser) {
    this.navCtrl = navCtrl; 
    
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  user = {};
  
//   export class LoginComponent {

//   credentials: Credentials;

//   constructor(private auth: AuthService) {}

//   onLogin(credentials) {
//     this.auth.login(credentials);
//   }
// }

  signinForm(form) {
    this.userRest.login();
    if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       else if (form.valid) { 
            this.navCtrl.push(LobbyPage);
     }
} 
}

