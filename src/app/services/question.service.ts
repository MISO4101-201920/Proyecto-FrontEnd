import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  private headers: HttpHeaders;
  private URL_HOST: string = 'http://127.0.0.1:8000/';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain'});
  }

  createMultipleOptionQuestion(): Observable<any> {
    // Cuando se implemente login validar aquí el token para que se hagala redirección correctamente
    // const signedIn = !!this.userToken;
    return this.http.get('');
  }
}