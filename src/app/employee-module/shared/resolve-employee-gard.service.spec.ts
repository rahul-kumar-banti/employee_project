import { TestBed, inject } from '@angular/core/testing';

import { ResolveEmployeeGardService } from './resolve-employee-gard.service';

describe('ResolveEmployeeGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveEmployeeGardService]
    });
  });

  it('should be created', inject([ResolveEmployeeGardService], (service: ResolveEmployeeGardService) => {
    expect(service).toBeTruthy();
  }));
});
