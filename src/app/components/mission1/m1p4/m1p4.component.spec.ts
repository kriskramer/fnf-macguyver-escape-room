import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p4Component } from './m1p4.component';

describe('M1p4Component', () => {
  let component: M1p4Component;
  let fixture: ComponentFixture<M1p4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
