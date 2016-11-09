import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { TestPage } from '../test/test';
import { ResultsPage } from '../results/results'; 



/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl; 
 }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }
   takeTest() {
        this.navCtrl.push(TestPage);
    }
     results() {
        this.navCtrl.push(ResultsPage);
    }
     logout() {
        this.navCtrl.push(LandingPage);
    }

}
