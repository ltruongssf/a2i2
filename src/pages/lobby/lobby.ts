import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { QuestionPage } from '../question/question';
import { ResultsPage } from '../results/results';
import { SSFUsersRest } from '../../providers/ssf-users-rest';
import { TKTestQuestions } from '../../providers/tk-test-questions';
import { TKTestAnswers } from '../../providers/tk-test-answers';


@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})

export class LobbyPage {

  constructor(
      public navCtrl: NavController,
      public usersRest: SSFUsersRest,
      public TKTestQuestionsServ: TKTestQuestions,
      public TKTestAnswersServ: TKTestAnswers) {
    TKTestQuestionsServ.all();
    this.navCtrl = navCtrl; 
  }
    
  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }
   
   takeTest() {
    this.TKTestAnswersServ.resetAnswers();
    this.navCtrl.push(QuestionPage, {
      questionId: 1
    });
  }
     results() {
        this.navCtrl.push(ResultsPage);
    }
   
   
   
    logout() {
    this.usersRest.logout(window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.clear();
      this.navCtrl.setRoot(LandingPage);
    }, err => {
      alert("Something went wrong!");
      window.localStorage.clear();
      this.navCtrl.setRoot(LandingPage);
    });
  }
}
