import { TestBed, inject } from '@angular/core/testing';

import { ListpageNavigationGuardService } from './listpage-navigation-guard.service';

describe('ListpageNavigationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListpageNavigationGuardService]
    });
  });

  it('should be created', inject([ListpageNavigationGuardService], (service: ListpageNavigationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
