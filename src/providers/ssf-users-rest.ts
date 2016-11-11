import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SSFUsersRest {

  constructor(public http: Http) {}
  
  register(credentials) {
    return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/", credentials)
    // return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/"+"?access_token="+token, credentials)
      
  }
  
  login(credentials) {
      return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/login", credentials)
      
  }

  
  logout(credentials) {
      return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/logout", credentials)
      // .map(res => res.json())
      // .subscribe(
      //   // We're assuming the response will be an object
      //   // with the JWT on an id_token key
      //   data => localStorage.setItem('id_token', data.id_token),
      //   error => console.log(error)
     // );
  }

}
