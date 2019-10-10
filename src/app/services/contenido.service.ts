import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private contenidoUrl = `${environment.apiUrl}/content/interactive_content/`;

  constructor(private httpClient: HttpClient) { }

  getContenidos(): Observable<any> {
    return this.httpClient.get<any>(this.contenidoUrl);
  }

  postContenidos(cursoIds: Array<number>, contenidoId: number) {
    const body = {
      cursos: cursoIds,
      contenido: contenidoId
    };
    return this.httpClient.post(this.contenidoUrl, body);
  }
}
