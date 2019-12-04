import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ActivitiesService} from "../../services/activities-service/activities.service";

// @ts-ignore
@Component({
  selector: 'app-pause-modal',
  templateUrl: './pause-modal.component.html',
  styleUrls: ['./pause-modal.component.css']
})
export class PauseModalComponent implements OnInit {

  enunciado;
  tiempo=0;
  countDown = 0;
  distance1 =0;


  constructor(
    public dialogRef: MatDialogRef<PauseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idActivity, idMarca },
    private activityService: ActivitiesService) {
    dialogRef.disableClose = true;

  }

  ngOnInit() {
    this.getPausa();
  }

    getPausa(){
    this.activityService.getPauseXIdMarca(this.data.idMarca).subscribe(data => {
      this.enunciado = data[0].enunciado;
      this.tiempo =data[0].tiempo;
      this.closeModal();
      console.log('tiempo de pausa ', this.tiempo);
        }, error => {
          console.log('Error getting question information -> ', error);
        });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async closeModal() {
      let tiempo=this.tiempo;
      while(tiempo>0){
         console.log('tiempo de pausa ', this.tiempo);
         this.countDown=tiempo-1;
         tiempo=tiempo-1;
         await this.delay(1000);
    }
    this.dialogRef.close()
  }

}
