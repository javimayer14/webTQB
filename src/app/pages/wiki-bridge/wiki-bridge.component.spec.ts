import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiBridgeComponent } from './wiki-bridge.component';

describe('WikiBridgeComponent', () => {
  let component: WikiBridgeComponent;
  let fixture: ComponentFixture<WikiBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiBridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
