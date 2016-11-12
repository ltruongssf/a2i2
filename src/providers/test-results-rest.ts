import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestResultsRest {

  constructor(public http: Http) {}
  

  getAll(token, userId) {
    return this.http.get("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults"+"?filter[where][userID]=" + userId +
        "&access_token=" + token
    );
  }



  
  save(test,token) {
     return this.http.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults"+'?access_token=' + token,
      test
    );
  }
 
  
  getTestResults(test,token) {
     return this.http.get("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults"+'?access_token=' + token,
      test
    );
  }
}
