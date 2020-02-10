import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPausaComponent } from './crear-pausa.component';

describe('CrearPausaComponent', () => {
  let component: CrearPausaComponent;
  let fixture: ComponentFixture<CrearPausaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPausaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
