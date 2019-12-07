import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContenidoService } from 'src/app/services/contenido.service';
import { DialogData } from "../crear-seleccion-multiple/crear-seleccion-multiple.component";

export interface DialogData {
  marca: any;
}

@Component({
  selector: 'app-crear-pregunta-vo-f',
  templateUrl: './crear-pregunta-vo-f.component.html',
  styleUrls: ['./crear-pregunta-vo-f.component.css']
})
export class CrearPreguntaVoFComponent implements OnInit {

  questionForm: FormGroup;
  respuesta: boolean;
  tieneRetroalimentacion: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CrearPreguntaVoFComponent>,
    private contenidoService: ContenidoService) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  initializeForm() {
    this.questionForm = this.formBuilder.group({
      pregunta: ['', [Validators.required]],
      esVerdadero: [this.respuesta, [Validators.required]],
      nombre: ['', [Validators.required]],
      tieneRetroalimentacion: [false, [Validators.required]],
      retroalimentacion: [null,],
      numeroDeIntentos: [1, [Validators.required, Validators.min(1)]],
    });
    this.tieneRetroalimentacion = this.questionForm.value.tieneRetroalimentacion;
  }

  cancel() {
    this.dialogRef.close();
  }

  agregarMarca() {

    if (this.questionForm.valid) {
      console.log('data', this.questionForm.value.esVerdadero);
      console.log('data', this.data);
      console.log('form', this.questionForm.value);
      this.questionForm.value.marca = this.data.marca;
      this.contenidoService.agregarMarcaVoF(this.questionForm.value).subscribe(result => {
        Swal.fire('Agregar Marca', 'Marca agregada correctamente', 'success');
        this.dialogRef.close();
      }, error => {
        console.error(error); 
          Swal.fire('Oops...', 'Ocurrió un error agregando la marca, por favor inténtalo de nuevo', 'error');
      });
    }
  }
}
