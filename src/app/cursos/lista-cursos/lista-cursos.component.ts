import {Component, OnInit} from '@angular/core';
import {CourseDetailsService} from 'src/app/services/course-details/course-details.service';
import {CursoService} from 'src/app/services/curso.service';
import {AuthService} from 'src/app/services/usuario/auth.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  courseInfoService;
  isAlumno;
  cursos = [];
  myData = [];

  constructor(private authService: AuthService, private cursosDocentes: CourseDetailsService, private cursosEstudiantes: CursoService) {
    this.isAlumno = this.authService.getDatos().isAlumno;
    this.courseInfoService = !this.isAlumno ? this.cursosDocentes : this.cursosEstudiantes;
  }

  ngOnInit() {
    if(this.isAlumno) {
      this.cursosEstudiantes.getCursosDeEstudiante().subscribe(data => {
        this.myData = data;
      });
    }else {
        this.courseInfoService.getCursos().subscribe(cursos => {
        this.cursos = cursos;
      });
    }
  }

  loadReport(id: number) {
    console.log(id);
  }
}
