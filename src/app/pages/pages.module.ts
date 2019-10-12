import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';


// Components of Pages
// import {LoadVideoComponent} from 'src/app/pages/loadVideo/load-video.component';


const routes: Routes = [
  // {path: '', component: LoadVideoComponent},
];

@NgModule({
  declarations: [
  //  LoadVideoComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesModule {
}
