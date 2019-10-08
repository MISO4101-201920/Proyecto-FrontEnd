import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit() {
    this.profesorService.getProfesor(2).subscribe(data => {
      console.log('data', data);
      this.cursos = data.cursos;
    });
  }

}
