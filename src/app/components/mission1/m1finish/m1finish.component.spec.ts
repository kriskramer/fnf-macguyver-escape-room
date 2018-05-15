import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1finishComponent } from './m1finish.component';

describe('M1finishComponent', () => {
  let component: M1finishComponent;
  let fixture: ComponentFixture<M1finishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1finishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1finishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
