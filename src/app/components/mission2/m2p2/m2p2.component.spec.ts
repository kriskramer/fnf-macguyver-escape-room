import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p2Component } from './m2p2.component';

describe('M2p2Component', () => {
  let component: M2p2Component;
  let fixture: ComponentFixture<M2p2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
