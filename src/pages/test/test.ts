import { Component, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavController, NavParams } from 'ionic-angular';

// @Injectable()
// export class Params {
//   public params;

//   constructor () {
//     this.params = {};
//   }
// }

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl; 
  }
  
  
} 

export class NextPage {
  constructor(public navCtrl: NavController, questionID) { 
    this.navCtrl.push(NextPage, {status: true})

  }
}




  
  // constructor(public navCtrl: NavController, public navParams: NavParams) { 