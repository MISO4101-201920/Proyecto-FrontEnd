import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contenido',
  templateUrl: './lista-contenido.component.html',
  styleUrls: ['./lista-contenido.component.css']
})
export class ListaContenidoComponent implements OnInit {

  showAddMarker = false;

  constructor() { }

  ngOnInit() {
  }


  addMarker() {
    this.showAddMarker = true;
  }
}
