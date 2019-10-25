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

  getActivitiesFromMarca(idMarca): Observable<any> {
    return this.http.get(this.api_base_url + 'activities/s/actividad?marca=' + idMarca);
  }

  getRetroOpMultiple(pregunta: number) {
    return this.http.get(this.api_base_url + '/activities/resp_op_multiple?esCorrecta=true&preguntaSeleccionMultiple=' + pregunta);
  }
    getMarcasXacontenido(idcontenido: number) {
    return this.http.get(this.api_base_url + '/activities/marca?contenido=' + idcontenido);
  }

  createRespuesta(idPregunta: number, idEstudiante: number, idRespuesta: number): Array<{ nombre: string; punto: number; contenido: number }>{
    // tslint:disable-next-line:max-line-length
    // @ts-ignore
    return this.http.post(this.api_base_url + '/activities/resp_estudiante_op_multipleresp_op_multiple?preguntaSeleccionMultiple=' + idPregunta, {estudiante: idEstudiante, respuestmultiple: idRespuesta});
    // tslint:disable-next-line:label-position no-unused-expression



  }


}
