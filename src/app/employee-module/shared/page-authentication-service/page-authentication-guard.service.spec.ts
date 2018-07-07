import { TestBed, inject } from '@angular/core/testing';

import { PageAuthenticationGuardService } from './page-authentication-guard.service';

describe('PageAuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageAuthenticationGuardService]
    });
  });

  it('should be created', inject([PageAuthenticationGuardService], (service: PageAuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
