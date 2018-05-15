import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p5Component } from './m1p5.component';

describe('M1p5Component', () => {
  let component: M1p5Component;
  let fixture: ComponentFixture<M1p5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
