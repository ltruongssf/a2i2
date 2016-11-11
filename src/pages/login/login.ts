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
  
  user = {};


  signinForm(form) {
     if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       else if (form.valid) { 
            this.navCtrl.push(LobbyPage);
       }
    this.usersRest.login()
    .map(res => res.json())
      .subscribe(
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
    } 
}

