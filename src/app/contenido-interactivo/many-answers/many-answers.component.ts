import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-many-answers',
  templateUrl: './many-answers.component.html',
  styleUrls: ['./many-answers.component.css'],

  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class ManyAnswersComponent implements OnInit {

  question: string;
  statusAnswer = false;
  answer: string;

  listAnswers: Array<{ name: string, status: boolean }> = new Array();
  questionDto: Array<{ question: string, answers: any }> = new Array();

  public tools: object = {
            items: [
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
                'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
        };

  constructor() { }

  ngOnInit() {

  }
  onKeyAnswer(value) {
  this.answer = value;
  }

  checkStatusAnswer(value) {
    this.statusAnswer = value;
  }

  addAnswer() {
    this.listAnswers.push({name: this.answer, status: this.statusAnswer });
    this.answer = '';
    this.statusAnswer = false;
  }

  addQuestion() {
    this.questionDto.push({question: this.question, answers: this.listAnswers});
    this.restartData();
  }

  restartData() {
    this.question = '';
    this.statusAnswer = false;
    this.answer = '';
    this.listAnswers = new Array();
    this.questionDto = new Array();
  }
}
