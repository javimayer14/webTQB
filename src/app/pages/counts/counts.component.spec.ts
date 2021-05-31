import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountsComponent } from './counts.component';

describe('CountsComponent', () => {
  let component: CountsComponent;
  let fixture: ComponentFixture<CountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
