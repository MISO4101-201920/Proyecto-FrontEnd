import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

export class NgbdModalContent {
  @Input() name;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  viewRespuesta() {
    const modalRef = this.modalService.open(NgbdModalContentRetroalimentacion);
    modalRef.componentInstance.respuesta = 'Enunciado de la respuesta correcta';
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
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      setTimeout(() => {
        this.player.pauseVideo();
        this.open();
      }, 2000);
    }

    console.log('player state', event.data);
  }

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
    modalRef.result.then(
      (data: any) => {
        console.log('saliendo de modal 1');
        this.player.playVideo();
      },
      (reason: any) => { }
    )
  }

  ngOnInit() {
  }

}
