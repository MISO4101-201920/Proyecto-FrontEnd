import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService{

  private headers: HttpHeaders;
  private URL_HOST: string = 'http://127.0.0.1:8000/';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain'});
  }

  getActivitiesFromMarca(idMarca): Observable<any> {
    return this.http.get(this.URL_HOST + 'activities/s/actividad?marca=' + idMarca);
  }

  createActivity(name, trys, retroActive, markerId): Observable<any> {
    return this.http.post(this.URL_HOST + 'activities/actividad', {nombre: name, numeroDeIntentos: trys, tieneRetroalimentacion: retroActive, marca: markerId});
  }
}
