import { TestBed, inject } from '@angular/core/testing';

import { CreateFormGuardService } from './create-form-guard.service';

describe('CreateFormGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateFormGuardService]
    });
  });

  it('should be created', inject([CreateFormGuardService], (service: CreateFormGuardService) => {
    expect(service).toBeTruthy();
  }));
});
