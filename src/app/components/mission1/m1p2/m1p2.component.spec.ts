import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1p2Component } from './m1p2.component';

describe('M1p2Component', () => {
  let component: M1p2Component;
  let fixture: ComponentFixture<M1p2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1p2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
