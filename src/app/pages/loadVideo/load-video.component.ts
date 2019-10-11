import { Component, OnInit } from '@angular/core';
import { LoadVideoService } from '../../services/contenidoInter/load-video.service'

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

  constructor(private _loadVideoService:LoadVideoService) { }

  ngOnInit() {
  }
  guardarVideo(){

  }

}
