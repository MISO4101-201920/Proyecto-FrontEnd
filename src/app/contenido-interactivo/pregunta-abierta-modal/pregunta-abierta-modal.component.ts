import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ActivitiesService} from "../../services/activities-service/activities.service";

@Component({
  selector: 'app-pregunta-abierta-modal',
  templateUrl: './pregunta-abierta-modal.component.html',
  styleUrls: ['./pregunta-abierta-modal.component.css']
})
export class PreguntaAbiertaModalComponent implements AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<PreguntaAbiertaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idActivity, idMarca },
    private activityService: ActivitiesService) {
    dialogRef.disableClose = true;
    this.getPreguntaAbierta();
  }

  ngAfterViewInit() {

  }

  getPreguntaAbierta(){
    this.activityService.getPreguntaVofXIdmarca(this.data.idMarca).subscribe(data => {
      this.PreguntaVof = data[0].pregunta;
      this.retroalimentacion =data[0].tieneRetroalimentacion;
      this.respuestaCorrecta=data[0].esVerdadero;
      this.idQuestion=data[0].id;
      this.intentosTotales=data[0].numeroDeIntentos;
      this.getIntentosDisponibles();
      console.log(data);
        }, error => {
          console.log('Error getting question information -> ', error);
        });
  }


  }

}
