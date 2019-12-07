import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAbiertaModalComponent } from './pregunta-abierta-modal.component';

describe('PreguntaAbiertaModalComponent', () => {
  let component: PreguntaAbiertaModalComponent;
  let fixture: ComponentFixture<PreguntaAbiertaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAbiertaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAbiertaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
