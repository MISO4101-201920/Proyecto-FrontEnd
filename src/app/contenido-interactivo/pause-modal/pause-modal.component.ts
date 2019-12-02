import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ActivitiesService} from "../../services/activities-service/activities.service";

@Component({
  selector: 'app-pause-modal',
  templateUrl: './pause-modal.component.html',
  styleUrls: ['./pause-modal.component.css']
})
export class PauseModalComponent implements OnInit {

  enunciado;
  tiempo=0;

  constructor(
    public dialogRef: MatDialogRef<PauseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idActivity, idMarca },
    private activityService: ActivitiesService) {
    dialogRef.disableClose = true;
    this.getPausa();
  }

  ngOnInit() {
  }

    getPausa(){
    this.activityService.getPauseXIdMarca(this.data.idMarca).subscribe(data => {
      this.enunciado = data[0].enunciado;
      this.tiempo =data[0].tiempo;
        }, error => {
          console.log('Error getting question information -> ', error);
        });
  }

}
