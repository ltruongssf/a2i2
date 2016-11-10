import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class QuestionsRest {

  constructor(public http: Http) {}
  
  login(credentials) {
    this.http.get("https://strongloop-backend-ohheyitslisa.c9users.io/api/Questions/", credentials)
      .map(res => res.json())
      .subscribe(
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );

}
