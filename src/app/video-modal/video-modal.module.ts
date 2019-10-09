import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbdModalContent, VideoModalComponent} from './video-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', component: VideoModalComponent },
];

@NgModule({
  declarations: [VideoModalComponent, NgbdModalContent],
  imports: [
    NgbModule,
    YoutubePlayerModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, VideoModalComponent],
  entryComponents: [NgbdModalContent]
})
export class VideoModalModule { }
