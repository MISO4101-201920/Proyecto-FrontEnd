import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map, filter } from 'rxjs/operators';

import { LoadVideo } from '../../models/videoLoad.model';

@Injectable({
  providedIn: 'root'
})
export class LoadVideoService {

  loadSendUrl = `${URL_SERVICIOS}/content/generate-content/`;

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': ''
    })
  };

  constructor(public http: HttpClient,
     // public _authService:AuthService
   ) { }

  loadUrl(loadVideo: LoadVideo): Observable<any> {
    console.log(JSON.stringify(loadVideo));
    // console.log(this._authService.getDatos);

    return this.http.post(this.loadSendUrl, JSON.stringify(loadVideo), this.httpOptions)
      .pipe(
        map((response) => {
          return response;
        }),
        retry(1),
        catchError(err => {
          console.log('Error subiendo url video', err);
          return Observable.throw(err);
        }
        )
      );
  }


}
