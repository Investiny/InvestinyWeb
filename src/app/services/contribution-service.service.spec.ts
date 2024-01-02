import { TestBed } from '@angular/core/testing';

import { ContributionServiceService } from './contribution-service.service';

describe('ContributionServiceService', () => {
  let service: ContributionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
