import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoAlumnoComponent} from './video-alumno.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionModalComponent } from 'src/app/contenido-interactivo/question-modal/question-modal.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { InteractVoFComponent } from 'src/app/contenido-interactivo/Interact-vo-f/Interact-vo-f.component';
import {PauseModalComponent} from "../contenido-interactivo/pause-modal/pause-modal.component";
import {PreguntaAbiertaModalComponent} from "../contenido-interactivo/pregunta-abierta-modal/pregunta-abierta-modal.component";


const routes: Routes = [
  { path: ':id', component: VideoAlumnoComponent },
];

@NgModule({
    declarations: [
      InteractVoFComponent,
      QuestionModalComponent,
      VideoAlumnoComponent,
      PauseModalComponent,
      PreguntaAbiertaModalComponent
    ],
    imports: [
      MaterialModule,
      NgbModule,
      YoutubePlayerModule,
      CommonModule,
      MatCheckboxModule,
      RouterModule.forChild(routes),
      FormsModule
    ],
    entryComponents: [
      QuestionModalComponent,
      InteractVoFComponent,
      PauseModalComponent,
      PreguntaAbiertaModalComponent
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MatCheckboxModule, useValue: {} },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }
    ],
    exports: [RouterModule, VideoAlumnoComponent]
  })
  export class VideoAlumnoModule { }
