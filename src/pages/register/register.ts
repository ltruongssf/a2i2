import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { SSFUsersRest } from '../../providers/ssf-users-rest';
import { Http } from '@angular/http';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public usersRest: SSFUsersRest, public http:Http) {
    this.navCtrl = navCtrl; 
    
  }
  
  user = {};
   
    register(form) {
     if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       else if (form.valid) { 
            this.navCtrl.push(LobbyPage);
       }
    this.usersRest.register()
    .map(res => res.json())
      .subscribe(
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
    } 
  
 }


//  register(form) {
//     if(form.invalid) 
//          return alert("Please fill in all of the required fields.");
//       else if (form.valid) { 
//             this.navCtrl.push(LobbyPage);
//      }
//     } 