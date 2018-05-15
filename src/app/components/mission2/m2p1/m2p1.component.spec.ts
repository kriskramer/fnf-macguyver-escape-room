import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p1Component } from './m2p1.component';

describe('M2p1Component', () => {
  let component: M2p1Component;
  let fixture: ComponentFixture<M2p1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
