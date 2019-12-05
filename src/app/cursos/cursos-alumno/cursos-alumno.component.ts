import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.component.html',
  styleUrls: ['./cursos-alumno.component.css']
})
export class CursosAlumnoComponent implements OnInit {

  panelOpenState = false;

  constructor(private cursoService: CursoService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.cursoService.getCursosDeEstudiante().subscribe(data => {

      console.log(data);


    });

  }

}
