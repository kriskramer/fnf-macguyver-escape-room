import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2p5Component } from './m2p5.component';

describe('M2p5Component', () => {
  let component: M2p5Component;
  let fixture: ComponentFixture<M2p5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2p5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
