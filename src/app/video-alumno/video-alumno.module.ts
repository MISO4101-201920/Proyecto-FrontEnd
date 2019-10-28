import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoAlumnoComponent} from './video-alumno.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: ':id', component: VideoAlumnoComponent },
];

@NgModule({
    declarations: [VideoAlumnoComponent],
    imports: [
      NgbModule,
      YoutubePlayerModule,
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule, VideoAlumnoComponent]
  })
  export class VideoAlumnoModule { }
