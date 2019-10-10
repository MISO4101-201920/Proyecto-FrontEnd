import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestMethod, RequestOptions} from '@angular/http';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p><button class="btn btn-lg btn-outline-primary" >Launch demo modal</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModal1Content {
  @Input() marcaid;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private http: HttpClient) {}

/*    httpPostExample() {
const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

this.http.post('http://localhost:8000/api/v1/actividad',
    {
    nombre: this.marcaNombre,
    numeroDeIntentos: Math.round(this.tiempo),
    tieneRetroalimentacion: this.idcontenido,
    nombre: this.marcaNombre,

}, {headers})
    .subscribe(
        (val) => {
            this.marcaid = val.id
            console.log('POST call successful value returned in body',
                        val.id);
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });
}*/





  /*open() {
    this.modalService.open(NgbdModal2Content, {
      size: 'lg'
    });
  }*/
}








@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hola, deseas crear marca en , {{tiempo}}!</p>
        <input type="text" name="nombre de marca" placeholder="Nombre de Marca" [(ngModel)]="marcaNombre" required>
      
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
        <button type="button" class="btn btn-outline-success" (click)="httpPostExample();activeModal.close('Close click');">Crear Marca</button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  marcaNombre;
  @Input() name;
  @Input() tiempo;
  @Input() idcontenido;
  marcaid;


  httpPostExample() {
const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

this.http.post('http://localhost:8000/api/v1/marca',
    {
    nombre: this.marcaNombre,
    punto: Math.round(this.tiempo),
    contenido: this.idcontenido
}, {headers})
    .subscribe(
        (val) => {

            console.log('POST call successful value returned in body',
                        val.id);
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });
}

  open() {
    const modalRef = this.modalService.open(NgbdModal1Content);
    modalRef.componentInstance.idcontenido = this.marcaid;
  }


  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private modalService: NgbModal) {}

}


@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})


export class VideoModalComponent implements OnInit {
  @Input() tiempo;
  idcontenido = 1;
  pauseTime = 0;


  constructor(private modalService: NgbModal, private http: HttpClient) {}

  player: YT.Player;
  private id = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {


   /* if (event.data == YT.PlayerState.PAUSED) {
          alert('Me detuve en el segundo  dasd' + this.player.getCurrentTime());
        }
    console.log('player state', event.data);
  */
   }


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.tiempo = this.player.getCurrentTime();
    modalRef.componentInstance.idcontenido = this.idcontenido;
    this.tiempo = this.player.getCurrentTime();
  }

  ngOnInit() {
  }

}

