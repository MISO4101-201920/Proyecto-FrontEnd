import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from 'src/app/services/course-details/course-details.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos;

  constructor(private courseDetailService: CourseDetailsService) { }

  ngOnInit() {
    this.courseDetailService.getCourseDetails().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  loadReport(id: number) {
    console.log(id);
  }
}
