import { TestBed, inject } from '@angular/core/testing';

import { ResolveemployeeAloneService } from './resolveemployee-alone.service';

describe('ResolveemployeeAloneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveemployeeAloneService]
    });
  });

  it('should be created', inject([ResolveemployeeAloneService], (service: ResolveemployeeAloneService) => {
    expect(service).toBeTruthy();
  }));
});
