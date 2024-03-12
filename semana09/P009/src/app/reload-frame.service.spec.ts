import { TestBed } from '@angular/core/testing';

import { ReloadFrameService } from './reload-frame.service';

describe('ReloadFrameService', () => {
  let service: ReloadFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
