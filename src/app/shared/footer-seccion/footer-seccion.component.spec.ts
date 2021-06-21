import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSeccionComponent } from './footer-seccion.component';

describe('FooterSeccionComponent', () => {
  let component: FooterSeccionComponent;
  let fixture: ComponentFixture<FooterSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
