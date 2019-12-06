import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities-service/activities.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AnswerQuestion, AnswerQuestionVoF} from "../../models/mark/answerQuestion.model";
import {AuthService} from "../../services/usuario/auth.service";
import {InfoLogin} from "../../models/infoLogin.model";

@Component({
  selector: 'app-interact-vo-f',
  templateUrl: './interact-vo-f.component.html',
  styleUrls: ['./interact-vo-f.component.css']
})
export class InteractVoFComponent implements  AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<InteractVoFComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idActivity, idMarca },
    private activityService: ActivitiesService,
    private authService: AuthService) {
    dialogRef.disableClose = true;
    this.getStudentData();
    this.getPreguntaVoF();
  }

  favoriteSeason: boolean;
  seasons: boolean[] = [true, false];


  PreguntaVof;
  retroalimentacion;
  respuestaCorrecta;
  retrofinal;
  respuestaVof;
  atLeastOneSelected=true;
  saveButtonflag=true;
  studentId=4;
  idGroup=null;
  numberTry: number;
  idQuestion:number;
  intentosTotales: number;
  intentosDispinibles: number;


  ngAfterViewInit() {

  }

  getStudentData(){
    let infoLogin: InfoLogin;
    infoLogin = this.authService.getInfoLogin();
    this.studentId= parseInt(infoLogin.dataAlumno.id, 10);
    console.log('codigo del estudiante nuevo -> ', this.studentId);
  }

  getIntentosDisponibles(){
    this.activityService.getLastTryByQuestionVoF(this.idQuestion, this.studentId).subscribe(
      answerTries => {
        console.log('get las try service',answerTries);
        this.intentosDispinibles = this.intentosTotales- answerTries.body.ultimo_intento;
        if(this.intentosDispinibles==0){
          this.saveButtonflag=false;
        }
        console.log('Numero de intentos disponibles -> ', answerTries.body.ultimo_intento);
  }, error => {
        console.log('Error trayendo intentos -> ', error);
      });
  }


  getPreguntaVoF(){
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

  saveAnswer(){
    console.log('respyesta vof ', this.respuestaVof);
    if(this.respuestaVof==undefined){
      this.atLeastOneSelected=false;
    }else{
      this.atLeastOneSelected=true;
      this.retrofinal=this.retroalimentacion;
      console.log('entro al ekse ');
      this.saveButtonflag=false;
      this.callSaveVofService();
    }

    //llamar servicio de guardar pregunta
  }

  callSaveVofService(){
      this.activityService.getLastTryByQuestionVoF(this.idQuestion, this.studentId).subscribe(
      answerTries => {
        console.log('get las try service',answerTries);
        this.numberTry = answerTries.body.ultimo_intento + 1;
        const request = new AnswerQuestionVoF(this.numberTry,this.respuestaVof,this.studentId, this.idGroup,this.idQuestion);
        console.log('informacion con respuesta ', request);
        this.activityService.savePreguntaVoF(request).subscribe(
          data => {
            console.log('success save answer ', data);
            }, error => {
            console.log('Error save answer-> ', error);
          }
          );
        }, error => {
        console.log('Error getting question information -> ', error);
      }
    );


  }


  continue(){
     this.dialogRef.close();
  }

}
