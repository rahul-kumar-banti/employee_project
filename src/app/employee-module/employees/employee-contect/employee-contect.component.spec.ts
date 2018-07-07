import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContectComponent } from './employee-contect.component';

describe('EmployeeContectComponent', () => {
  let component: EmployeeContectComponent;
  let fixture: ComponentFixture<EmployeeContectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
