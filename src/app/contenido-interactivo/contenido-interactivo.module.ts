import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
];

@NgModule({
  declarations: [ListaContenidoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContenidoInteractivoModule { }
