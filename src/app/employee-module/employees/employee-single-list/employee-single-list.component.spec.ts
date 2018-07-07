import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSingleListComponent } from './employee-single-list.component';

describe('EmployeeSingleListComponent', () => {
  let component: EmployeeSingleListComponent;
  let fixture: ComponentFixture<EmployeeSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSingleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
