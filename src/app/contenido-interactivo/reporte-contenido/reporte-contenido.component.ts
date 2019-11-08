import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/services/contenido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporte-contenido',
  templateUrl: './reporte-contenido.component.html',
  styleUrls: ['./reporte-contenido.component.css']
})
export class ReporteContenidoComponent implements OnInit {

  displayedColumns: string[] = ['pregunta', 'posiblesRespuestas', 'respuestasOpcion', 'porcentajeRespuesta'];
  dataSource;

  constructor(private contenidoService: ContenidoService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.contenidoService.getReporteContenido(+params.id).subscribe(data => {
          this.dataSource = []
          this.processData(data.marcas).forEach(element => {
            element.preguntas.forEach(f => {
              this.dataSource.push(f);
            });
          });
          console.log('dataSource', this.dataSource);
        });
      }
    });
  }

  processData(data) {
    console.log(data);
    // Extrae solo las actividades de las marcas
    const activities = data.map(marca => marca.actividades);
    // Deja un array flat con todas las actividades
    const flatActivites = this.calculatePercentage(this.flatten(activities));
    // calcula y retorna porcentaje de respuesta por cada pregunta
    return this.calculatePercentage(flatActivites);
  }

  calculatePercentage(actividades) {
    const actividadesPorcentaje  = actividades.map(actividad => {
      actividad.preguntas.map(pregunta => {
        const total = pregunta.total_respuestas;
        if (pregunta.tipo === 'multiple') {
          pregunta.opciones.map(opcion => {
            opcion.porcentajeRespuesta = total != 0 ? (opcion.votos * 100) / total : 0;
            return opcion;
          });
        } else if (pregunta.tipo === 'verdadero/falso') {
          pregunta.respuestaCorrecta = pregunta.opciones[0].respuesta;
          pregunta.porcentajeVerdadero = total != 0 ? (pregunta.opciones[0].numeroVerdadero * 100) / total : 0;
          pregunta.porcentajeFalso = total != 0 ? (pregunta.opciones[0].numeroFalso * 100) / total : 0;
        }
        return pregunta;
      });
      return actividad;
    });
    return actividadesPorcentaje;
  }

  flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten);
    }, []);
  }

}
