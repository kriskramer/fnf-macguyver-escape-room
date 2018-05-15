import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p6Component } from './m2p6.component';

describe('M2p6Component', () => {
  let component: M2p6Component;
  let fixture: ComponentFixture<M2p6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
