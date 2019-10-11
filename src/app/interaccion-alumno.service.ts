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


   /*   getActividad(marca: number) {
    return this.http.get(this.api_base_url + 'api/v1/actividad?marca=1' + marca);
  }

    getPregunta(actividad: number) {
    return this.http.get(this.api_base_url + '/api/v1/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
  }*/

  getRetroOpMultiple(pregunta: number) {
    return this.http.get(this.api_base_url + '/api/v1/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
  }
    getMarcasXacontenido(idcontenido: number) {
    return this.http.get(this.api_base_url + '/api/v1/marca?contenido=' + idcontenido);
  }
}
