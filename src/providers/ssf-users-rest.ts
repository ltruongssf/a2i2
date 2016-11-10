import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SSFUsersRest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SSFUsersRest {

  constructor(public http: Http) {}
  
  login(credentials) {
    this.http.post('https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/login', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }
  logout(credentials) {
    this.http.post('https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/logout', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }

}
