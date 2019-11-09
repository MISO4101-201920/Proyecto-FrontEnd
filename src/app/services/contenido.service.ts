import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private contenidoUrl = `${environment.apiUrl}/content/interactive_content/`;
  private reportesUrl = `${environment.apiUrl}/activities/reports/`;
  private detalleUrl = `${environment.apiUrl}/content/interactivecontent/`;
  private crearContenidoInteractivo = `${environment.apiUrl}/content/cont_interactivo`;

  constructor(private httpClient: HttpClient) { }

  getContenidos(): Observable<any> {
    return this.httpClient.get<any>(this.contenidoUrl);
  }

  postContenidoInteractivo(nombre: string, contenidoId: number) {
    const body = {
      nombre: nombre,
      contenido: contenidoId
    };
    console.log('body:', body);
    return this.httpClient.post(this.crearContenidoInteractivo, body);
  }

  postContenidos(cursoIds: Array<number>, contenidoId: number) {
    const body = {
      cursos: cursoIds,
      contenido: contenidoId
    };
    console.log('bodyy', body);
    return this.httpClient.post(this.contenidoUrl, body);
  }

  getDetalleContenidoInteractivo(contentId: number): Observable<any> {
    return this.httpClient.get<any>(this.detalleUrl + contentId);
    /*const dataArr = {
      nombre: 'Mi Contenido Interactivo 1',
      tieneRetroalimentacion: true,
      calificacion: 5,
      contenido: {
        nombre: "Video 1",
        url: "youtube.com",
        fuente: "Youtube"
      },
      cursos: [
        {
          nombre: "Curso 1",
          descripcion: "Este es el curso numero 1"
        },
        {
          nombre: "Curso 2",
          descripcion: "Este es el curso numero 2"
        }
      ],
      marcas: [
        {
          id: 1,
          punto: 153
        },
        {
          id: 2,
          punto: 2253
        }
      ]
    }

    //return of(dataArr);*/

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
}
