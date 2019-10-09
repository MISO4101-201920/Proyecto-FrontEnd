import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {

  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {

    if (event.data == YT.PlayerState.PAUSED) {
          alert('Me detuve en el segundo  dasd' + this.player.getCurrentTime());
        }
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
