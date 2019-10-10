import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestMethod, RequestOptions} from '@angular/http';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";


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
        <div class="row margin-top-10">
        <div class="col-12 title-answers">Opciones de Respuesta</div>
        <div class="col-3">Repuesta válida</div>
        <div class="col-6">Enunciado </div>
    </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModal2Content {
  @Input() marcaid;
  @Input() pregunta;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private http: HttpClient) {}
}




@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Agregar Actividad</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p></p>
        <input type="text" name="nombre de marca" placeholder="Nombre de actividad" [(ngModel)]="nombre" required>
         <br><br>
        <input type="text" name="nombre de marca" placeholder="Numero de intentos" [(ngModel)]="intentos" required>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
        <button type="button" class="btn btn-outline-success" (click)="httpPostExample();activeModal.close('Close click');">Crear Actividad</button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModal1Content {
  @Input() marcaid;
  @Input() nombre;
  @Input() intentos;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private http: HttpClient) {}

    httpPostExample() {
const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

this.http.post('http://localhost:8000/api/v1/actividad',
    {
    nombre: this.nombre,
    numeroDeIntentos: this.intentos,
    tieneRetroalimentacion: false,
    marca: this.marcaid,

}, {headers})
    .subscribe(
        (val: any) => {

            console.log('POST call successful value returned in body',
                        val);
            const modalRef = this.modalService.open(NgbdModal2Content, {size: 'lg'});
            modalRef.componentInstance.actividadid = val.id;
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });
}

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
        <button type="button" class="btn btn-outline-success" (click)="httpPostExample();activeModal.close('Close click')">Crear Marca</button>
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
        (val: any) => {
          console.log('POST call successful value returned in body',
                        val);
          const modalRef = this.modalService.open(NgbdModal1Content);
          modalRef.componentInstance.marcaid = val.id;
        },

        response => {
            console.log('POST call in error', response);
        },
        () => {

            console.log('The POST observable is now completed.');
        });
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
    const modalRef = this.modalService.open(NgbdModalContent,{ size: 'lg' });
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.tiempo = this.player.getCurrentTime();
    modalRef.componentInstance.idcontenido = this.idcontenido;
    this.tiempo = this.player.getCurrentTime();
  }

  ngOnInit() {
  }

}

