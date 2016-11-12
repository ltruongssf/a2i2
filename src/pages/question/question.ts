import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Result } from '../result/result';

import { TKTestQuestions } from '../../providers/tk-test-questions';
import { TKResultsButton } from '../../providers/tk-results-button';
import { TKTestAnswers } from '../../providers/tk-test-answers';

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  questionId = undefined;
  testInfo = undefined;
  questionA = undefined;
  questionB = undefined;
  
  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              public TKTestQuestionsServ: TKTestQuestions,
              public TKTestAnswersServ: TKTestAnswers) {
    this.questionId = navParams.get('questionId');
    this.isSubmitted = false;
  }
  
  ionViewDidLoad() {
    var test = this;
    this.testInfo = this.TKTestQuestionsServ.getQuestion(this.questionId);
    this.testInfo.forEach(function(infoDict) {
      if(infoDict.Answer_ID === "A")
        test.questionA = infoDict;
      if(infoDict.Answer_ID === "B") {
        test.questionB = infoDict;
      }
    });
  }
  
  isSubmitted = false;
  buttonClicked(option) {
    var category = this["question" + option].Style;
    this.TKTestAnswersServ.saveAnswer(category);
    
    if(this.questionId == 30) {
      if(!this.isSubmitted) {
        this.isSubmitted = true;
        this.performRequest();
      }
    }
    else {
      nextQ(this.navCtrl, this.questionId);
    }
  }
  performRequest() {
    var answersDict = this.TKTestAnswersServ.getAnswers();
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    answersDict["userID"] = window.localStorage.getItem('userId');
    this.TKTestAnswersServ.saveTest(answersDict, window.localStorage.getItem('token'));
    //this.TKResultsButtonServ.setShouldShowMenuButton(true);
    this.navCtrl.setRoot(Result);
  }
}

let nextQ = function(nav, index) {
  //TODO remove this index increment by 4
  // index = 29;
  nav.push(QuestionPage, {
    questionId: ++index
  });
};
  