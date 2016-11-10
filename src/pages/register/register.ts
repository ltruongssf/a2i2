import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl; 
    
  }
  
  user = {};
  
   register(form) {
    if(form.invalid) 
         return alert("Please fill in all of the required fields.");
       else if (form.valid) { 
            this.navCtrl.push(LobbyPage);
     }
    } 
 }
