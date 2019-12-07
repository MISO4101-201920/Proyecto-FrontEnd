import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractVoFComponent } from './interact-vo-f.component';

describe('InteractVoFComponent', () => {
  let component: InteractVoFComponent;
  let fixture: ComponentFixture<InteractVoFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractVoFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractVoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
