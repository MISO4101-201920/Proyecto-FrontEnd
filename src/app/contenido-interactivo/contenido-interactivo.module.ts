import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { AddContenidoACursoComponent } from './add-contenido-a-curso/add-contenido-a-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ReporteContenidoComponent } from './reporte-contenido/reporte-contenido.component';
import { MarkersComponent } from './markers/markers.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ManyAnswersComponent } from './many-answers/many-answers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
  { path: 'reporte/:id', component: ReporteContenidoComponent },
  { path: 'manejar', component: MarkersComponent},


];

@NgModule({
  declarations: [ListaContenidoComponent, AddContenidoACursoComponent, ReporteContenidoComponent,
    MarkersComponent, ManyAnswersComponent, QuestionModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RichTextEditorAllModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  entryComponents: [
    AddContenidoACursoComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class ContenidoInteractivoModule { }
