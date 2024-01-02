import { TestBed } from '@angular/core/testing';

import { PaiementServiceService } from './paiement-service.service';

describe('PaiementServiceService', () => {
  let service: PaiementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
