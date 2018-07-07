import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploeesComponent } from './list-emploees.component';

describe('ListEmploeesComponent', () => {
  let component: ListEmploeesComponent;
  let fixture: ComponentFixture<ListEmploeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmploeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmploeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
