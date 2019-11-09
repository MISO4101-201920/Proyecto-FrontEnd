import { Component, OnInit } from '@angular/core';
import { LoadVideoService } from '../../services/contenidoInter/load-video.service';


@Component({
  selector: 'app-crear-contenido',
  templateUrl: './crear-contenido.component.html',
  styleUrls: ['./crear-contenido.component.css']
})
export class CrearContenidoComponent implements OnInit {

  constructor(private _loadVideoService: LoadVideoService) { }

  listContenido = [];

  ngOnInit() {

    this._loadVideoService.getContenido()
      .subscribe(
        result => {
          console.log("ED: ", result);
          this.listContenido = result;
        },
        error => {
          console.log("Edu: ", error);
        },
        () => {

        }
      );
  }

}
