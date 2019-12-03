import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  private cursoUrl = `${environment.apiUrl}/content/courses/details/`;

  constructor(private httpClient: HttpClient) { }

  getCourseDetails(): Observable<any> {
    return this.httpClient.get<any>(this.cursoUrl);
  }
}
