import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map, filter } from 'rxjs/operators';
import { AuthService } from '../usuario/auth.service';
import { environment } from 'src/environments/environment';

import { LoadVideo } from '../../models/videoLoad.model';

@Injectable({
  providedIn: 'root'
})
export class LoadVideoService {

  // loadSendUrl = `${URL_SERVICIOS}/content/generate-content/`;
  loadSendUrl = `${environment.apiUrl}/content/generate-content/`;




  constructor(public http: HttpClient,
    public _authService: AuthService
  ) { }

  loadUrl(loadVideo: LoadVideo): Observable<any> {
    // Http Headers
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'Token '+this._authService.getDatos().token
      })
    };
    console.log(JSON.stringify(loadVideo));
    // console.log(this._authService.getDatos().token);
    console.log(httpOptions.headers);
    // this.httpOptions.headers.set("Authorization", this._authService.getDatos().token);

    return this.http.post(this.loadSendUrl, JSON.stringify(loadVideo), httpOptions)
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
