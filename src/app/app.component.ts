import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LandingPage } from '../pages/landing/landing';
import { LobbyPage } from '../pages/lobby/lobby';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

  // constructor(platform: Platform) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }
  export class MyApp {
    rootPage = window.localStorage.getItem("token") ? LobbyPage : LandingPage;
}

