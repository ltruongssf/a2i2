import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { TestPage } from '../pages/test/test';
import { ResultsPage } from '../pages/results/results'; 

const injections = [MyApp, LandingPage, LoginPage, RegisterPage, LobbyPage, TestPage, ResultsPage];
@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: []
})
export class AppModule {}
