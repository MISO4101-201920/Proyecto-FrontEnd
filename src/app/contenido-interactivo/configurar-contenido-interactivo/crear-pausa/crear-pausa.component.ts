import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContenidoService } from 'src/app/services/contenido.service';
import Swal from 'sweetalert2';

export interface DialogData {
  marca: any;
}

@Component({
  selector: 'app-crear-pausa',
  templateUrl: './crear-pausa.component.html',
  styleUrls: ['./crear-pausa.component.css']
})
export class CrearPausaComponent implements OnInit {

  questionForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CrearPausaComponent>,
    private contenidoService: ContenidoService) {

    this.initializeForm();
  }

  ngOnInit() {
  }

  initializeForm() {
    this.questionForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      enunciado: ['', [Validators.required]],
      tiempo: [1, [Validators.required, Validators.min(1)]],
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  agregarMarca() {
    console.log('data', this.data);
    console.log('form', this.questionForm.value);
    if (this.questionForm.valid) {
      this.questionForm.value.marca = this.data.marca;
      this.contenidoService.agregarMarcaPausa(this.questionForm.value).subscribe(result => {
        Swal.fire('Agregar Marca', 'Marca agregada correctamente', 'success');
        this.dialogRef.close();
      }, error => {
        console.error(error);
        Swal.fire('Oops...', 'Ocurrió un error agregando la marca, por favor inténtalo de nuevo', 'error');
      });

    } else {
      Swal.fire('Oops...', 'Revisa los campos ingresados', 'error');

    }
  }

}
