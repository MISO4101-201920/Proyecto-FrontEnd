import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


//Components of Pages
import { LoadVideoComponent } from './LoadVideo/load-video.component'


const routes: Routes = [
  { path: '', component: LoadVideoComponent },
];

@NgModule({
  declarations: [
    LoadVideoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesModule { }
