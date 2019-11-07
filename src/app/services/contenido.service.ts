import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private contenidoUrl = `${environment.apiUrl}/content/interactive_content/`;
  private reportesUrl = `${environment.apiUrl}/activities/reports/`;


  constructor(private httpClient: HttpClient) { }

  getContenidos(): Observable<any> {
    return this.httpClient.get<any>(this.contenidoUrl);
  }

  postContenidos(cursoIds: Array<number>, contenidoId: number) {
    const body = {
      cursos: cursoIds,
      contenido: contenidoId
    };
    console.log('bodyy', body);
    return this.httpClient.post(this.contenidoUrl, body);
  }

  getReporteContenido(contentId: number): Observable<any>  {
  return this.httpClient.get<any>(this.reportesUrl + contentId);
    // const dataTest = {
    //   nombre: 'profesor1',
    //   marcas: [{
    //     nombre: 'marca1',
    //     actividades: [{
    //       nombre: 'actividad1',
    //       tipo: 'multiple',
    //       opciones: [
    //         {
    //           respuesta: 'posible respuesta 1',
    //           esCorrecta: true,
    //           votos: 5
    //         },
    //         {
    //           respuesta: 'posible respuesta 2',
    //           esCorrecta: false,
    //           votos: 5
    //         },
    //         {
    //           respuesta: 'posible respuesta 3',
    //           esCorrecta: false,
    //           votos: 5
    //         }
    //       ]
    //     },
    //     {
    //       nombre: 'actividad2',
    //       tipo: 'verdadero/falso',
    //       opciones: [
    //         {
    //           respuesta: 'posible respuesta 1',
    //           esCorrecta: true,
    //           votos: 5
    //         },
    //         {
    //           respuesta: 'posible respuesta 2',
    //           esCorrecta: false,
    //           votos: 5
    //         },
    //       ]
    //     }
    //     ]
    //   }]
    // };
    // return dataTest;
  }

  agregarMarca(marca:any) : Observable<any> {
    return this.httpClient.post(this.contenidoUrl, marca);
  }
}
