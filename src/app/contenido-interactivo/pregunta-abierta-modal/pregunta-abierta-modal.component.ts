import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { ActivitiesService } from "../../services/activities-service/activities.service";
import { AnswerQuestion, AnswerQuestionVoF, AnswerOpenQuestion } from "../../models/mark/answerQuestion.model";

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
  enunciado;
  retroalimentacion;
  respuestaCorrecta;
  idQuestion;
  intentosTotales;
  respuestaEstudiante;
  respuestaNoEmpty=true;
  retrofinal;
  saveButtonflag=true;
  studentId = 4;
  numberTry: number;
  idGroup = null;
  respestaProfe;
  intentosDispinibles: number;



  ngAfterViewInit() {

  }
  getIntentosDisponibles() {
    this.activityService.getLastTryByQuestion(this.idQuestion, this.studentId).subscribe(
      answerTries => {
        console.log('get las try service', answerTries);
        this.intentosDispinibles = this.intentosTotales - answerTries.body.ultimo_intento;
        if (this.intentosDispinibles == 0) {
          this.saveButtonflag = false;
        }
        console.log('Numero de intentos disponibles -> ', answerTries.body.ultimo_intento);
      }, error => {
        console.log('Error trayendo intentos -> ', error);
      });
  }

  getPreguntaAbierta(){
    this.activityService.getPreguntaAbiertaXMarca(this.data.idMarca).subscribe(data => {
      this.enunciado = data[0].enunciado;
      this.retroalimentacion =data[0].tieneRetroalimentacion;
      this.respuestaCorrecta=data[0].esVerdadero;
      this.idQuestion=data[0].id;
      this.intentosTotales = data[0].numeroDeIntentos;
      this.respestaProfe = data[0].retroalimentacion;
      this.getIntentosDisponibles();
      console.log(data);
        }, error => {
          console.log('Error getting question information -> ', error);
        });
  }

  saveAnswer() {
    console.log('respuesta abierta estudiante ', this.respuestaEstudiante);
    if (this.respuestaEstudiante == undefined) {
      this.respuestaNoEmpty = false;
    } else {
      this.respuestaNoEmpty = true;
      this.retrofinal = this.retroalimentacion;
      console.log('entro al ekse ');
      this.saveButtonflag = false;
      this.callSaveAbiertaService();
    }

    //llamar servicio de guardar pregunta
  }
  continue() {
    this.dialogRef.close();
  }

  callSaveAbiertaService() {
    this.activityService.getLastTryByQuestion(this.idQuestion, this.studentId).subscribe(
      answerTries => {
        console.log('get las try service', answerTries);
        this.numberTry = answerTries.body.ultimo_intento + 1;
        const request = new AnswerOpenQuestion(this.numberTry, this.respuestaEstudiante,null, this.studentId, this.idGroup, this.idQuestion);
        console.log('informacion con respuesta ', request);
        this.activityService.savePreguntaAbierta(request).subscribe(
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


  }


