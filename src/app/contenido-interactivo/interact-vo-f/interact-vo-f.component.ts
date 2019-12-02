import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities-service/activities.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-interact-vo-f',
  templateUrl: './interact-vo-f.component.html',
  styleUrls: ['./interact-vo-f.component.css']
})
export class InteractVoFComponent implements  AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<InteractVoFComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idActivity, idMarca },
    private activityService: ActivitiesService) {
    dialogRef.disableClose = true;
    this.getPreguntaVoF();
  }

  favoriteSeason: boolean;
  seasons: boolean[] = [true, false];


  PreguntaVof;
  retroalimentacion;
  respuestaCorrecta;
  retrofinal;


  ngAfterViewInit() {
  }


  getPreguntaVoF(){
    this.activityService.getPreguntaVofXIdmarca(this.data.idMarca).subscribe(data => {
      this.PreguntaVof = data[0].pregunta;
      this.retroalimentacion =data[0].tieneRetroalimentacion;
      this.respuestaCorrecta=data[0].esVerdadero;
      console.log(this.retroalimentacion);
        }, error => {
          console.log('Error getting question information -> ', error);
        });
  }

  saveAnswer(){
    this.retrofinal=this.retroalimentacion;
    //llamar servicio de guardar pregunta
  }

}
