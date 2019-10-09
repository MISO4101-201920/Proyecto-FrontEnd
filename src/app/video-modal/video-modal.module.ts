import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';


const routes: Routes = [
  { path: '', component: VideoModalComponent },
];

@NgModule({
  declarations: [VideoModalComponent],
  imports: [
    YoutubePlayerModule,
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class VideoModalModule { }
