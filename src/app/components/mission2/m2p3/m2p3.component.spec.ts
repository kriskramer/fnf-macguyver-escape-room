import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p3Component } from './m2p3.component';

describe('M2p3Component', () => {
  let component: M2p3Component;
  let fixture: ComponentFixture<M2p3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
