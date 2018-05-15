import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p4Component } from './m2p4.component';

describe('M2p4Component', () => {
  let component: M2p4Component;
  let fixture: ComponentFixture<M2p4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
