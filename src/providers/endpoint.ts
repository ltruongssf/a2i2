import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Endpoint provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
// export class Endpoint {

//   constructor(public http: Http) {}
  
//   changeEndpoint(credentials) {
//     window.localStorage.userId.setItem(userId, value) { 
//     return this.http.post('https://strongloop-backend-' + userID + '.c9users.io/api/', credentials)
//   }
// }


export class AppSettings {
   public static get API_ENDPOINT(): string { return 'https://strongloop-backend-ohheyitslisa.c9users.io/api/'; }
}

// app.module.ts 


