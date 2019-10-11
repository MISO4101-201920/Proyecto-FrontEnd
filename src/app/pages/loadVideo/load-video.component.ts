import { Component, OnInit } from '@angular/core';
import { LoadVideoService } from '../../services/contenidoInter/load-video.service'
import { LoadVideo } from '../../models/videoLoad.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styles: [`
    .contenedor {
      margin: 40px 0px 0px 50px;
    }
    h2 {
      color: #00008B;
      margin-bottom: 5%;
    }
    input {
      width: 65%;
    }
`]
})
export class LoadVideoComponent implements OnInit {

  loadVideo: LoadVideo ={
    url:'',
    nombre:'',
    cursos_seleccionados: {}
  };
  constructor(private _loadVideoService: LoadVideoService) { }

  ngOnInit() {
  }
  guardarVideo() {
    this.loadVideo.url = "https://www.youtube.com/watch?v=3JuYkJyJh7c";
    this.loadVideo.nombre = "We Finally Understand Supergirl's Bizarre History";
    this.loadVideo.cursos_seleccionados = [{ "id": 1 }];
    console.log(this.loadVideo);
    this._loadVideoService.loadUrl(this.loadVideo)
      .subscribe(
        result => {
          console.log(result)
        },
        error => {
          console.log(error);
          Swal.fire('Oops...', 'revisa los datos ingresados', 'error')
        },
        () => {
          Swal.fire('Cargado!', 'Tu video ha sido cargado con Exito a contenido interactivo.','success')
          // this.router.navigate(['/']);
        }
      );
  }

}
