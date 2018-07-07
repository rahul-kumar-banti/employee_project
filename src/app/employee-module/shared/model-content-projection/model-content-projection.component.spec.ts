import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContentProjectionComponent } from './model-content-projection.component';

describe('ModelContentProjectionComponent', () => {
  let component: ModelContentProjectionComponent;
  let fixture: ComponentFixture<ModelContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
