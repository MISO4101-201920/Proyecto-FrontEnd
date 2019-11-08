import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CrearSeleccionMultipleComponent } from './crear-seleccion-multiple/crear-seleccion-multiple.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-configurar-contenido-interactivo',
  templateUrl: './configurar-contenido-interactivo.component.html',
  styleUrls: ['./configurar-contenido-interactivo.component.css']
})
export class ConfigurarContenidoInteractivoComponent implements AfterViewInit {

  player: YT.Player;
  private id = 'qDuKsiwS5xw';
  playerVars = {
    // Oculta la barra de reproducción (0)
    controls: 0,
    playsinline: 1,
    modestbranding: 1,
    enablejsapi: 1
  };
  private playing = false;
  progressBarValue = 0;
  values = [1, 3, 5, 10, 20, 50, 100];    //values to step to

  // Elementos del DOM a manipular
  @ViewChild('progressBar', { static: false }) progressBar: ElementRef;
  constructor(public dialog: MatDialog) { }

  // // Escuchar evento cuando se mueve la barra
  // @HostListener('window:mouseup', ['$event'])
  // onMouseUp(event) {
  //   if (event.target.id === 'progressBar') {
  //     this.handleTouchProgressBar(event);
  //   }
  // }

  opcionesMarca = [
    'Pregunta de opción múltiple',
    'Pregunta Falso o Verdadero',
    'Pregunta abierta',
    'Pausa',
    'Foro'
  ];
  marcaSeleccionada = this.opcionesMarca[0];

  ngAfterViewInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
    // Update the controls on load
    this.updateProgressBar();

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    const timeUpdateInterval = setInterval(() => {
      this.updateProgressBar();
    }, 1000);

    // Clear any old interval.
    clearInterval(timeUpdateInterval);
  }
  onStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      this.playing = true;
    } else if (event.data === YT.PlayerState.PAUSED) {
      this.playing = false;
    }
    this.updateProgressBar();
    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    const timeUpdateInterval = setInterval(() => {
      this.updateProgressBar();
    }, 500);

  }

  // Actualiza el estado de la barra de reproducción cuando se navega
  public updateProgressBar(): void {
    this.progressBarValue = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
    // this.progressBar.nativeElement.value = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
  }

  handleTouchProgressBar(e: any): void {
    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    const newTime = this.player.getDuration() * (e / 100);

    // Skip video to new time
    this.player.seekTo(newTime, true);
  }

  play(): void {
    if (!this.playing) {
      this.playing = true;
      this.player.playVideo();
    }
  }

  pause(): void {
    if (this.playing) {
      this.player.pauseVideo();
      this.playing = false;
    }
  }

  addMarker() {
    this.pause();
    // Por ahora solo se  podría selección multiple
    console.log('Añadir marca en', this.player.getCurrentTime());
    const marca = {
      nombre: 'marca',
      punto: Math.round(this.player.getCurrentTime() * 100) / 100,
      contenido_id: 1
    };
    this.openDialog(marca);
  }
  openDialog(marca): void {
    this.dialog.open(CrearSeleccionMultipleComponent, {
      width: '70%',
      data: {
        marca
      }
    });
  }
}
