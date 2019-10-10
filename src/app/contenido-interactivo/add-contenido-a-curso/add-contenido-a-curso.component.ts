import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';
import { FormControl, Validators } from '@angular/forms';
import { ContenidoService } from 'src/app/services/contenido.service';

export interface DialogData {
  contenidoId: number;
  nombreContenido: string;
}
@Component({
  selector: 'app-add-contenido-a-curso',
  templateUrl: './add-contenido-a-curso.component.html',
  styleUrls: ['./add-contenido-a-curso.component.css']
})
export class AddContenidoACursoComponent implements OnInit {

  cursos;
  cursosForm = new FormControl(null, [Validators.required]);
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cursoService: CursoService,
    private contenidoService: ContenidoService,
    public dialogRef: MatDialogRef<AddContenidoACursoComponent>) {

  }

  ngOnInit() {
    this.cursoService.getCursosDisponibles(this.data.contenidoId).subscribe(cursos => {
      console.log('data', cursos);
      this.cursos = cursos;
    });
  }

  asociarContenido() {
    if (this.cursosForm.valid) {
      console.log('values', this.cursosForm.value, this.cursosForm);
      this.contenidoService.postContenidos(this.cursosForm.value, this.data.contenidoId).subscribe(result => {
        console.log(result);
        this.dialogRef.close();
      });
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }


}
