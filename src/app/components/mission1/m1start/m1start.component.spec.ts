import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1StartComponent } from './m1start.component';

describe('M1mainComponent', () => {
  let component: M1StartComponent;
  let fixture: ComponentFixture<M1StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1StartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
