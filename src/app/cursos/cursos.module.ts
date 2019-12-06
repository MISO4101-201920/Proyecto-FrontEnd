import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { MaterialModule } from 'src/material.module';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';

const routes: Routes = [
  { path: '', component: ListaCursosComponent },
  { path: 'miscursos', component: CursosAlumnoComponent }
];

@NgModule({
  declarations: [ListaCursosComponent, CursosAlumnoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CursosModule { }
