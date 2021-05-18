import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentarProyectoComponent } from './presentar-proyecto.component';

describe('PresentarProyectoComponent', () => {
  let component: PresentarProyectoComponent;
  let fixture: ComponentFixture<PresentarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
