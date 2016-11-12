import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Chart } from 'ng2-chartjs2';
import { LobbyPage } from '../lobby/lobby';
import { TKTestAnswers } from '../../providers/tk-test-answers';
// import { TKResultsButton } from '../../providers/tk-results-button';


@Component({
  selector: 'page-result',
  templateUrl: 'results.html'
})

export class ResultsPage {
  labels: string[];
  // data: Chart.dataset[];
  answers = undefined;
  showButton = false;

  constructor(public navCtrl: NavController,
              public TKTestAnswersServ: TKTestAnswers
              // public TKResultsButtonServ: TKResultsButton
              ) {
    this.answers = this.TKTestAnswersServ.getAnswers();
  //   this.createChart();
  //   this.showButton = this.TKResultsButtonServ.shouldShowButton;
  // }
}


  
  ionViewDidLoad() {
    console.log('Hello Result Page');
  }
  
  toLobby() {
    this.navCtrl.setRoot(LobbyPage);
  }
  
  createChart() {
    this.labels = [
      'Competing',
      'Collaborating',
      'Compromising',
      'Avoiding',
      'Accommodating'
    ];
    // this.data = [{
    //   label: 'Thomas-Killman Conflict Management Results',
    //   data: [this.answers.competing/12*100,
    //         this.answers.collaborating/12*100,
    //         this.answers.compromising/12*100,
    //         this.answers.avoiding/12*100,
    //         this.answers.accommodating/12*100],
    //   backgroundColor: [
    //     'rgba(255,99,132,0.2)',
    //     'rgba(54,162,235,0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)'
    //   ],
    //   borderColor: [
    //     'rgba(255,99,132,1)',
    //     'rgba(54,162,235,1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'
    //   ],
    //   borderWidth: 1
    // }];
  }
}
