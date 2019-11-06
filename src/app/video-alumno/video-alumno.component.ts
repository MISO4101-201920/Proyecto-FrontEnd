import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InteraccionAlumnoService } from '../interaccion-alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadVideoService } from '../services/contenidoInter/load-video.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionModalComponent } from 'src/app/contenido-interactivo/question-modal/question-modal.component';

@Component({
  selector: 'app-video-alumno',
  templateUrl: './video-alumno.component.html',
  styleUrls: ['./video-alumno.component.css']
})
export class VideoAlumnoComponent implements OnInit {

  idContent = '';
  retroalimentacion: string;
  player: YT.Player;
  id = '';
  private marcas: any[];
  dosperro = 99999;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private retroalimentacionService: InteraccionAlumnoService,
    public dialog: MatDialog,
    private contentService: LoadVideoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params['id']);
      this.idContent = params['id'] ? params['id'] : '';
    });
  }

  ngOnInit() {
    console.log('POST call successful value returned in body on init');
    const idPregunta = 1;
    this.retroalimentacionService.getRetroOpMultiple(idPregunta).subscribe((data: any[]) => {
      console.log(data);
      this.retroalimentacion = data[0].respuesta;
    });
  }

  async savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
    this.getContentInteractive(this.idContent);
    this.getContentMark();

    await console.log('player currenttime', this.player.getCurrentTime());
    //console.log('player nnn', this.marcas[i].punto);
    while (1 == 1) {
      this.dosperro = 999999;
      await this.delay(1000);
       console.log('player currenttime', Math.round(this.player.getCurrentTime()));
      for (let i = 0; i < this.marcas.length; i++) {
        if (Math.round(this.player.getCurrentTime()) === this.marcas[i].punto) {
          this.player.pauseVideo();
          
          await this.open(this.marcas[i]);
          while (this.dosperro  == 999999) {

          await this.delay(1000);
          }
          
        }
        // await this.open(this.marcas[0]);
        //await console.log('player marca', this.marcas[0].punto);
      }
    }

    //await console.log('player state', event.data);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

   async onStateChange(event) {
     // tslint:disable-next-line:prefer-for-of

  }

  open(marca: any) {
    
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '70%',
      data: {
        idActivity: '1',
        idMarca: marca.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.player.playVideo();
      this.dosperro = 1;
    });
    
  }


  getContentMark() {
    this.retroalimentacionService.getMarcasXacontenido(parseInt(this.idContent, 10)).subscribe(
      (val: any) => {
        this.marcas = val;
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  getContentInteractive(idContent) {
    if (idContent !== undefined) {
      this.contentService.getInteractiveContentById(idContent).subscribe(
        data => {
          this.id = data.body[0].contenido.url;
          this.id = this.id.substr(this.id.indexOf('v=') + 2);
          this.player.loadVideoById(this.id, 0, 'large');

        }, error => {
          console.log('Error getting question information -> ', error);
        }
      );
    }
  }

}
