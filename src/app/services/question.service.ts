import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

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

  createQuestion(question, activityId): Observable<any>{
    return this.http.post(this.URL_HOST + 'activities/pregunta', {Pregunta: question, actividad: activityId});
  }

  createMultipleOptionAnswer(answer, correctAnswer, questionId): Observable<any> {
    return this.http.post(this.URL_HOST + 'activities/resp_op_multiple', {respuesta: answer, esCorrecta: correctAnswer, preguntaSeleccionMultiple: questionId});
  }
}