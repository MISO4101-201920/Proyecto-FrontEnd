import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InteraccionAlumnoService } from '../interaccion-alumno.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      <button type="button" class="btn btn-outline-dark" (click)="viewRespuesta()">Enviar Respuesta</button>
    </div>
  `
})

export class NgbdModalContent implements OnInit {
  @Input() name;
  @Input() retroalimentacion;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, ) { }

  ngOnInit() {



  }

  viewRespuesta() {



    const modalRef = this.modalService.open(NgbdModalContentRetroalimentacion);
    modalRef.componentInstance.respuesta = this.retroalimentacion;
    modalRef.result.then(
      (data: any) => {
        console.log('saliendo de modal 2');
        this.activeModal.close('resume');
      },
      (reason: any) => { });




    // this.modalService.open(NgbdModalContentRetroalimentacion, {
    //   size: 'lg'
    // });
  }
}

@Component({
  selector: 'ngbd-modal-retroalimentacion',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">La respuesta correcta es</h4>

    </div>
    <div class="modal-body">
      <p>{{respuesta}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('videoResume')">Continuar</button>
    </div>
  `
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContentRetroalimentacion {
  @Input() respuesta;
  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-video-alumno',
  templateUrl: './video-alumno.component.html',
  styleUrls: ['./video-alumno.component.css']
})
export class VideoAlumnoComponent implements OnInit {
  retroalimentacion: string;
  player: YT.Player;
  private id = 'qDuKsiwS5xw';
  private idcontenido: 2;
  private marcas: any[];
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

   delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onStateChange(event) {

    let bol = false
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    // tslint:disable-next-line:prefer-for-of
    console.log('player currenttime', this.player.getCurrentTime());
    for (let i = 0; i < this.marcas.length; i++) {
      console.log('player nnn', this.marcas[i].punto)
      if (event.data == YT.PlayerState.PLAYING) {
        while (bol == false) {
          await this.delay(1000);
          console.log('player currenttime', Math.round(this.player.getCurrentTime()));
          if (Math.round(this.player.getCurrentTime()) == this.marcas[i].punto) {
              this.player.pauseVideo();
              this.open();
              bol = true;
              this.marcas.shift();
              console.log('player marca', this.marcas[i].punto);
            }
        }
        // tslint:disable-next-line:prefer-for-of
      }
    }
    console.log('player state', event.data);
  }

  constructor(
    private modalService: NgbModal,
    private retroalimentacionService: InteraccionAlumnoService,
    ) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.retroalimentacion = this.retroalimentacion;
    modalRef.result.then(
      (data: any) => {
        console.log('saliendo de modal 1');
        this.player.playVideo();
      },
      (reason: any) => { }
    );
  }

  ngOnInit() {
     console.log('POST call successful value returned in body',
              'on init');
     const idPregunta = 1;
     this.retroalimentacionService.getRetroOpMultiple(idPregunta).subscribe((data: any[]) => {
      console.log(data);
      this.retroalimentacion = data[0].respuesta;
    });

     this.retroalimentacionService.getMarcasXacontenido(2).subscribe(
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

}
