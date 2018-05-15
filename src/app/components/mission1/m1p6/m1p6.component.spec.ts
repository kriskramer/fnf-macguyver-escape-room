import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p6Component } from './m1p6.component';

describe('M1p6Component', () => {
  let component: M1p6Component;
  let fixture: ComponentFixture<M1p6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
