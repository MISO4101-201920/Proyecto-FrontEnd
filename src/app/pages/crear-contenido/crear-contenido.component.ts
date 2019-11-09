import { Component, OnInit, Inject } from '@angular/core';
import { LoadVideoService } from '../../services/contenidoInter/load-video.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContenidoService } from '../../services/contenido.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-contenido',
  templateUrl: './crear-contenido.component.html',
  styleUrls: ['./crear-contenido.component.css']
})
export class CrearContenidoComponent implements OnInit {

  constructor(private _loadVideoService: LoadVideoService, public dialog: MatDialog) { }

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

  openModal(video): void {
    console.log("llamado modal", video);
    const dialogRef = this.dialog.open(ModalAsociarContenidoInt, {
      width: '350px',
      data: { video: video.nombre, id: video.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


//modal
@Component({
  selector: 'modal-AsoContInt',
  templateUrl: 'modal-asociar-contenido.html',
})
export class ModalAsociarContenidoInt {

  constructor(
    public dialogRef: MatDialogRef<ModalAsociarContenidoInt>,
    @Inject(MAT_DIALOG_DATA) public data,
    public _contenidoService: ContenidoService,
    public router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearContenido(nombre, id) {
    this._contenidoService.postContenidoInteractivo(nombre.value, id).subscribe(result => {
      console.log('resulttt',result);
      this.router.navigate(['contenido-interactivo/configurar/', result['id']]);
    });
  }

}
