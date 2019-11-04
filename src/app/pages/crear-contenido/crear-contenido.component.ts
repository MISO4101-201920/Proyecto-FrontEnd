import { Component, OnInit } from '@angular/core';
import { LoadVideoService } from '../../services/contenidoInter/load-video.service';


@Component({
  selector: 'app-crear-contenido',
  templateUrl: './crear-contenido.component.html',
  styleUrls: ['./crear-contenido.component.css']
})
export class CrearContenidoComponent implements OnInit {

  constructor(private _loadVideoService: LoadVideoService) { }

  listContenido = [
    {
      nombre: "Video Uno",
      fuente: "YouTube",
      duracion: "Duración: 00:13:45"
    },
    {
      nombre: "Matematicas Aplicadas",
      fuente: "YouTube",
      duracion: "Duración: 00:13:45"
    },
    {
      nombre: "Ciencias Básicas",
      fuente: "Vimeo",
      duracion: "Duración: 00:13:45"
    },
    {
      nombre: "Programación",
      fuente: "YouTube",
      duracion: "Duración: 00:13:45"
    },
  ]

  ngOnInit() {
  }

}
