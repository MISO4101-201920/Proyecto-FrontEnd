import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnswerQuestion } from 'src/app/models/mark/answerQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activitiesUrl = `${environment.apiUrl}/activities/`;

  constructor(private httpService: HttpService) { }

  getActivityById(id): Observable<any> {
    const url = this.activitiesUrl + 'preguntaOpcionMultiple/' + id + '/';
    console.log('url llamado', url);
    return this.httpService.getRequestWithoutParams(url).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  getMarcaById(id): Observable<any> {
    const url = this.activitiesUrl + 'marca';
    console.log('url llamado', url);
    const data = {
      contenido: id
    };
    return this.httpService.getRequestWithParams(url, data).map(
      response => {
        console.log('response success ', response);
        return response;
      }, error => {
        console.log('response error ', error);
        return error;
      }
    );
  }

  postAnswerQuestion(answer: AnswerQuestion): Observable<any> {
    const url = this.activitiesUrl + 'respuestaOpcionMultiple';
    const data = {
      contenido: answer
    };
    console.log('data', data);
    return this.httpService.postJSON(url, data).map(
      response => {
        console.log('response success ', response);
        return response;
      }, error => {
        console.log('response error ', error);
        return error;
      }
    );
  }
}
