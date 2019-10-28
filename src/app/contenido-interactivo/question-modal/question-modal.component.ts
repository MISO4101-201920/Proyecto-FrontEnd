import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivitiesService } from 'src/app/services/activities-service/activities.service';
import { PreguntaOpcionMultiple } from 'src/app/models/mark/questionMultiple.model';
import { OpcionesPreguntaMultiple } from 'src/app/models/mark/optionsQuestionMultiple.model';
import { LoadVideoService } from 'src/app/services/contenidoInter/load-video.service';
import { AnswerQuestion } from 'src/app/models/mark/answerQuestion.model';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnInit {

  questionInformation: PreguntaOpcionMultiple;
  hasQuestionsToShow = false;
  hasManyOptions = false;
  answersForQuestionArray: Array<{ idOption: Int16Array, idQuestion: string, answerOption: boolean, titleOption: string }> = new Array();

  constructor(public dialogRef: MatDialogRef<QuestionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { idActivity },
    private activityService: ActivitiesService) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    console.log('id Activity To Consult -> ', this.data.idActivity);
    this.getQuestion();
  }

  saveAnswer() {
    console.log('Guardar Respuesta');
    // const answer = new AnswerQuestion()
    // this.activityService.postAnswerQuestion(answer);
    this.dialogRef.close();
  }

  getQuestion() {
    if (this.data.idActivity !== undefined) {
      this.activityService.getActivityById(this.data.idActivity).subscribe(
        data => {
          console.log('Success getting question information -> ', data);
          this.questionInformation = new PreguntaOpcionMultiple
            (null, data.body[0].enunciado, data.body[0].esMultipleResp, data.body[0].opciones);
          this.hasManyOptions = data.body[0].esMultipleResp;
          this.generateArrayOptions(this.questionInformation.opciones);
          if (this.questionInformation !== undefined) {
            this.hasQuestionsToShow = true;
          }
        }, error => {
          console.log('Error getting question information -> ', error);
        }
      );
    }
  }

  checkOptionAnswer(value, idOptionSelected) {
    this.answersForQuestionArray.forEach(answer => {
      if (answer.idOption === idOptionSelected) {
        answer.answerOption = value;
      } else if (!this.hasManyOptions) {
        answer.answerOption = false;
      }
    });
  }

  generateArrayOptions(arrayOptions: Array<OpcionesPreguntaMultiple>) {
    arrayOptions.forEach(option => {
      this.answersForQuestionArray.push(
        { idOption: option.id, idQuestion: this.data.idActivity, answerOption: false, titleOption: option.opcion });
    });
  }


}
