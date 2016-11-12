import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SSFUsersRest {

  constructor(public http: Http) {}
  
  register(newUserData) {
    return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/Users/", newUserData);
   
    
  }
  
  login(credentials) {
      return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/Users/login", credentials);
      
  }

  
 logout(token) {
    return this.http.post(
      'https://strongloop-backend-ohheyitslisa.c9users.io/api/Users/logout'+
        '?access_token=' + token, {} 
        );
  }  
}

