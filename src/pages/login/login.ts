import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl; 
    
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
   loginEmail(){
        this.navCtrl.push(LobbyPage);
    }

}
