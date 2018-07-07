import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianContentProjectionComponent } from './accordian-content-projection.component';

describe('AccordianContentProjectionComponent', () => {
  let component: AccordianContentProjectionComponent;
  let fixture: ComponentFixture<AccordianContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
