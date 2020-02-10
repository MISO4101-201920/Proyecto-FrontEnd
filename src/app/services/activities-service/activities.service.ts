import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnswerQuestion, AnswerQuestionVoF, AnswerOpenQuestion} from 'src/app/models/mark/answerQuestion.model';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activitiesUrl = `${environment.apiUrl}/activities/`;

  constructor(private httpService: HttpService,private httpClient: HttpClient) { }

  getPreguntaVofXIdmarca(idMark: number): Observable<any> {
    return this.httpClient.get<any>(this.activitiesUrl + 'pregunta_f_v/' + idMark + '/');
  }

  getPreguntaAbiertaXMarca(idMark: number):Observable<any>{
    return this.httpClient.get<any>(this.activitiesUrl + 'pregunta_abierta/' + idMark + '/');
  }

  getPauseXIdMarca(idMark:number) :Observable<any> {
    return this.httpClient.get<any>(this.activitiesUrl + 'pausas/' + idMark + '/');
  }

  getActivityType(idMark:number) :Observable<any> {
    return this.httpClient.get<any>(this.activitiesUrl + 'tipo_actividad?id_marca=' + idMark);
  }

  getActivityById(id): Observable<any> {
    const url = this.activitiesUrl + 'preguntaOpcionMultiple/' + id + '/';
    return this.httpService.getRequestWithoutParams(url).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }
/*
  getPreguntaVofXIdmarca(id): Observable<any> {
    const url = this.activitiesUrl + 'pregunta_f_v/' + id + '/';
    return this.httpService.getRequestWithoutParams(url).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }
*/
  getMarcaById(id): Observable<any> {
    const url = this.activitiesUrl + 'marca';
    const data = {
      contenido: id
    };
    return this.httpService.getRequestWithParams(url, data).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  postSaveAnswerQuestion(answer: AnswerQuestion): Observable<any> {
    const url = this.activitiesUrl + 'respuestaOpcionMultiple/';
    return this.httpService.postJSON(url, answer).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  savePreguntaAbierta(answerVoF: AnswerOpenQuestion): Observable<any> {
    const url = this.activitiesUrl + 'respuestaAbierta/';
    return this.httpService.postJSON(url, answerVoF).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }





  savePreguntaVoF(answerVoF:AnswerQuestionVoF):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Token ');
    const url = this.activitiesUrl + 'respuestafov/';
    return this.httpService.postJSON(url, answerVoF).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  getLastTryByQuestion(idQuestion, idStudent): Observable<any> {
    const url = this.activitiesUrl + 'ultimo_intento';
    const data = {
      id_pregunta: idQuestion,
      id_estudiante: idStudent
    };
    return this.httpService.getRequestWithParams(url, data).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  getLastTryByQuestionOpen(idQuestion, idStudent): Observable<any> {
    const url = this.activitiesUrl + 'intentos_maxOpen';
    const data = {
      id_pregunta: idQuestion,
      id_estudiante: idStudent
    };
    return this.httpService.getRequestWithParams(url, data).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }



    getLastTryByQuestionVoF(idQuestion, idStudent): Observable<any> {
    const url = this.activitiesUrl + 'ultimo_intentoVof';
    const data = {
      id_pregunta: idQuestion,
      id_estudiante: idStudent
    };
    return this.httpService.getRequestWithParams(url, data).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

}
