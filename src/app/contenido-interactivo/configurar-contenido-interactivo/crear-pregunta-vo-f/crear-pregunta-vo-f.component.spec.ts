import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPreguntaVoFComponent } from './crear-pregunta-vo-f.component';

describe('CrearPreguntaVoFComponent', () => {
  let component: CrearPreguntaVoFComponent;
  let fixture: ComponentFixture<CrearPreguntaVoFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPreguntaVoFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPreguntaVoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
