import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2startComponent } from './m2start.component';

describe('M2startComponent', () => {
  let component: M2startComponent;
  let fixture: ComponentFixture<M2startComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2startComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2startComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
