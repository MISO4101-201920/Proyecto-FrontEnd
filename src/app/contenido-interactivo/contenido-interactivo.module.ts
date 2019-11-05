import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { AddContenidoACursoComponent } from './add-contenido-a-curso/add-contenido-a-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReporteContenidoComponent } from './reporte-contenido/reporte-contenido.component';
import { MarkersComponent } from './markers/markers.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ManyAnswersComponent } from './many-answers/many-answers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ConfigurarContenidoInteractivoComponent } from './configurar-contenido-interactivo/configurar-contenido-interactivo.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
  { path: 'reporte/:id', component: ReporteContenidoComponent },
  { path: 'manejar', component: MarkersComponent},
  { path: 'configurar', component: ConfigurarContenidoInteractivoComponent},

];

@NgModule({
  declarations: [ListaContenidoComponent, AddContenidoACursoComponent, ReporteContenidoComponent,
    MarkersComponent, ManyAnswersComponent, ConfigurarContenidoInteractivoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RichTextEditorAllModule,
    FormsModule,
    YoutubePlayerModule
  ],
  exports: [RouterModule],
  entryComponents: [
    AddContenidoACursoComponent
  ]
})
export class ContenidoInteractivoModule { }
