import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private headers: HttpHeaders;
  private URL_HOST: string = `${environment.apiUrl}`;
  private userToken: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain' });
  }

  createActivity(name, trys, retroActive, markerId): Observable<any> {
    return this.http.post(this.URL_HOST + 'activities/actividad', { nombre: name, numeroDeIntentos: trys, tieneRetroalimentacion: retroActive, marca: markerId });
  }
}