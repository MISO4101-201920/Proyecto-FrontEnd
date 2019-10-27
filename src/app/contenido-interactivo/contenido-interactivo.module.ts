import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { AddContenidoACursoComponent } from './add-contenido-a-curso/add-contenido-a-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
];

@NgModule({
  declarations: [ListaContenidoComponent, AddContenidoACursoComponent, QuestionModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forChild(routes)
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
