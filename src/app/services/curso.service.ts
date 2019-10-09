import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursoUrl = `${environment.apiUrl}/content/courses/`;

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<any> {
    return this.httpClient.get<any>(this.cursoUrl);
  }
}
