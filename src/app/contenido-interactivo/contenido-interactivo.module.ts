import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkersComponent } from './markers/markers.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ManyAnswersComponent } from './many-answers/many-answers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
];

@NgModule({
  declarations: [ListaContenidoComponent, MarkersComponent, ManyAnswersComponent],
  imports: [
    CommonModule,
    RichTextEditorAllModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContenidoInteractivoModule { }
