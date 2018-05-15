import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2finishComponent } from './m2finish.component';

describe('M2finishComponent', () => {
  let component: M2finishComponent;
  let fixture: ComponentFixture<M2finishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2finishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2finishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
