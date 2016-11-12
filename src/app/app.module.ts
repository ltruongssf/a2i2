import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { ResultsPage } from '../pages/results/results'; 
import { RestQuestions } from '../providers/questions-rest';
import { SSFUsersRest } from '../providers/ssf-users-rest';
import { TestResultsRest } from '../providers/test-results-rest';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TKTestAnswers } from '../providers/tk-test-answers';
import { TKTestQuestions } from '../providers/tk-test-questions';
import { QuestionPage } from '../pages/question/question';


const injections = [MyApp, LandingPage, LoginPage, RegisterPage, LobbyPage, QuestionPage, ResultsPage];
@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp), HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [RestQuestions, SSFUsersRest, TestResultsRest, TKTestAnswers,TKTestQuestions]
})
export class AppModule {}
