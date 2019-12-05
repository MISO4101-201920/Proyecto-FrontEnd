import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InteraccionAlumnoService } from '../interaccion-alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadVideoService } from '../services/contenidoInter/load-video.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionModalComponent } from 'src/app/contenido-interactivo/question-modal/question-modal.component';
import { InteractVoFComponent } from 'src/app/contenido-interactivo/Interact-vo-f/Interact-vo-f.component';
import { ContenidoService } from '../services/contenido.service';
import { ActivitiesService } from 'src/app/services/activities-service/activities.service';
import {PauseModalComponent} from "../contenido-interactivo/pause-modal/pause-modal.component";
import {PreguntaAbiertaModalComponent} from "../contenido-interactivo/pregunta-abierta-modal/pregunta-abierta-modal.component";

@Component({
  selector: 'app-video-alumno',
  templateUrl: './video-alumno.component.html',
  styleUrls: ['./video-alumno.component.css']
})
export class VideoAlumnoComponent implements OnInit {



  activityType=0;
  idContent = '';
  retroalimentacion: string;
  player: YT.Player;
  id = '';
  marcas: any[];
  dosperro = 999999;
  progressBarValue = 0;
  playing = false;
  playerVars = {
    // Oculta la barra de reproducción (0)
    controls: 0,
    playsinline: 1,
    modestbranding: 1,
    enablejsapi: 1
  };
  waiting = false;
  counter = 0;
  contentsLoaded: Promise<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private retroalimentacionService: InteraccionAlumnoService,
    public dialog: MatDialog,
    private contentService: LoadVideoService,
    private contenidoService: ContenidoService,
    private activityService: ActivitiesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params.id);
      this.idContent = params.id ? params.id : '';
    });
  }

  ngOnInit() {
    console.log('POST call successful value returned in body on init');
    const idPregunta = 1;
    const actualVid = '';
    this.retroalimentacionService.getRetroOpMultiple(idPregunta).subscribe((data: any[]) => {
      console.log(data);
      this.retroalimentacion = data[0].respuesta;
    });
    this.getContentInteractive(this.idContent);

    // this.contentService.getInteractiveContentById(17).subscribe(res => {
    //  console.log(res);
    //  actualVid = res.body.results[0].contenido.url;
    //  console.log(actualVid);
    //  this.id = actualVid.split('=')[1];
    // })
    // this.contenidoService.getDetalleContenidoInteractivo(17).subscribe(res => {
    //  console.log(res)
    // })
  }

  async savePlayer(player) {
    let activitytype=0;
    this.player = player;
    console.log('player instance', player);
    this.getContentMark();

    await console.log('player currenttime', this.player.getCurrentTime());
    // console.log('player nnn', this.marcas[i].punto);
    while (1 == 1) {
      this.dosperro = 999999;
      await this.delay(1000);
      console.log('player currenttime', Math.round(this.player.getCurrentTime()));
      for (let i = 0; i < this.marcas.length; i++) {
        if (Math.round(this.player.getCurrentTime()) === this.marcas[i].punto) {
          this.player.pauseVideo();
          console.log('IDE DE A MARKA', this.marcas[i].id);

          this.openModals(this.marcas[i]);

          while (this.dosperro  == 999999) {

          await this.delay(1000);
          }

        }
        // await this.open(this.marcas[0]);
        // await console.log('player marca', this.marcas[0].punto);
      }
    }

    // await console.log('player state', event.data);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openPReguntaMultople(marca: any): void {

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

  openPreguntaVoF(marca: any) {

    const dialogRef = this.dialog.open(InteractVoFComponent, {
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

  openPause(marca: any) {

    const dialogRef = this.dialog.open(PauseModalComponent, {
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

  openModals(marca: any) {
     //console.log("Id de la marca ", marca);
     this.activityService.getActivityType(marca.id).subscribe((data:any) => {
       this.activityType = data.tipo_actividad;

       if (data.tipo_actividad == 1) {
         this.openPReguntaMultople(marca);
       }
       if (data.tipo_actividad == 2) {
         this.openPreguntaVoF(marca);
       }
       if (data.tipo_actividad == 3) {
         this.openPreguntaAbierta(marca);
       }
       if (data.tipo_actividad == 4) {
         this.openPause(marca);
       }

       }, error => {
       console.log('Error getting question information -> ', error);
     });
   }

   openPreguntaAbierta(marca: any) {

    const dialogRef = this.dialog.open(PreguntaAbiertaModalComponent, {
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
      this.contenidoService.getDetalleContenidoInteractivo(idContent).subscribe(contenido => {
        this.id = contenido.contenido.url.split('watch?v=')[1];
        this.contentsLoaded = Promise.resolve(true);
        console.log('contenido alumno', contenido);
        console.log('idd', this.id);
      }, error => {
        console.log('Error getting question information -> ', error);
      });
    }
  }
  onStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      this.playing = true;
    } else if (event.data === YT.PlayerState.PAUSED) {
      this.playing = false;
    }
    this.updateProgressBar();
    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    const timeUpdateInterval = setInterval(() => {
      this.updateProgressBar();
    }, 500);

  }

  // Actualiza el estado de la barra de reproducción cuando se navega
  public updateProgressBar(): void {
    this.progressBarValue = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
    // this.progressBar.nativeElement.value = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
  }

  handleTouchProgressBar(e: any): void {
    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    const newTime = this.player.getDuration() * (e / 100);

    // Skip video to new time
    this.player.seekTo(newTime, true);
  }

  play(): void {
    if (!this.playing) {
      this.playing = true;
      this.player.playVideo();
    }
  }

  pause(): void {
    if (this.playing) {
      this.player.pauseVideo();
      this.playing = false;
    }
  }

}
