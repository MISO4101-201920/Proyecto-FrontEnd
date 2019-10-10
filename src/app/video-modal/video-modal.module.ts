import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbdModal1Content, NgbdModal2Content, NgbdModalContent, VideoModalComponent} from './video-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: VideoModalComponent },
];

@NgModule({
  declarations: [VideoModalComponent, NgbdModalContent, NgbdModal1Content, NgbdModal2Content],
  imports: [
    NgbModule,
    YoutubePlayerModule,
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule, VideoModalComponent],
  entryComponents: [NgbdModalContent, NgbdModal1Content, NgbdModal2Content]
})
export class VideoModalModule { }
