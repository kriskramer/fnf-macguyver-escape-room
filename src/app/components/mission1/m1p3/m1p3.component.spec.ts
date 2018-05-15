import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p3Component } from './m1p3.component';

describe('M1p3Component', () => {
  let component: M1p3Component;
  let fixture: ComponentFixture<M1p3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
