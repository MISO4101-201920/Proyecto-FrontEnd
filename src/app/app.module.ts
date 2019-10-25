import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../material.module';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { ModalModule } from 'ngx-bootstrap/modal';


// Modulos
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { HttpClientModule } from '@angular/common/http';

import { VideoModalModule } from './video-modal/video-modal.module';
import { VideoAlumnoModule } from './video-alumno/video-alumno.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YoutubePlayerModule,
    VideoModalModule,
    VideoAlumnoModule,
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
