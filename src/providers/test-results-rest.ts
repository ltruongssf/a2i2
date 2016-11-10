import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestResultsRest {

  constructor(public http: Http) {}
  TestResultsRest = this;

  TestResultsRest.getAll(credentials) 
    TestResultsRest.get("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults", credentials)
      .map(res => res.json())
      .subscribe(
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
      
      
  
  TestResultsRest.save(credentials) 
    TestResultsRest.post("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults", credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  
  TestResultsRest.get(credentials) 
    TestResultsRest.get("https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults", credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );

}
