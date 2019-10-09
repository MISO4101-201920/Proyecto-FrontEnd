import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RetroalimentacionOpMul } from './video-alumno/retroalimentacion';

@Injectable({
  providedIn: 'root'
})
export class InteraccionAlumnoService {
  api_base_url = 'http://127.0.0.1:8000';
  private retroalimentacionMul: RetroalimentacionOpMul;

  constructor(private http: HttpClient) { }

  getRetroOpMultiple(pregunta: number): Observable<any> {    
    return this.http.get<RetroalimentacionOpMul>(this.api_base_url + '/api/v1/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
  }
}
