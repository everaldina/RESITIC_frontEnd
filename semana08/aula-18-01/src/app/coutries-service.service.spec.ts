import { TestBed } from '@angular/core/testing';

import { CoutriesServiceService } from './coutries-service.service';

describe('CoutriesServiceService', () => {
  let service: CoutriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoutriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
