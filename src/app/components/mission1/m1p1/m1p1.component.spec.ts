import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p1Component } from './m1p1.component';

describe('M1p1Component', () => {
  let component: M1p1Component;
  let fixture: ComponentFixture<M1p1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
