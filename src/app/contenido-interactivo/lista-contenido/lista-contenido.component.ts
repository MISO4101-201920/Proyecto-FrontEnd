import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/services/contenido.service';

@Component({
  selector: 'app-lista-contenido',
  templateUrl: './lista-contenido.component.html',
  styleUrls: ['./lista-contenido.component.css']
})
export class ListaContenidoComponent implements OnInit {

  contenidos;

  constructor(private contenidoService: ContenidoService) { }

  ngOnInit() {
    this.contenidoService.getContenidos().subscribe(contenidos => {
      console.log('data', contenidos);
      this.contenidos = contenidos;
    });
  }


}
