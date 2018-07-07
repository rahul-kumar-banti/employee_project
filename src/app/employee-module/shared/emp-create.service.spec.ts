import { TestBed, inject } from '@angular/core/testing';

import { EmpCreateService } from './emp-create.service';

describe('EmpCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpCreateService]
    });
  });

  it('should be created', inject([EmpCreateService], (service: EmpCreateService) => {
    expect(service).toBeTruthy();
  }));
});
