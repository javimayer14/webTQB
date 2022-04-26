import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixAndFlipComponent } from './flix-and-flip.component';

describe('FlixAndFlipComponent', () => {
  let component: FlixAndFlipComponent;
  let fixture: ComponentFixture<FlixAndFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixAndFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlixAndFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
