import { TestBed } from '@angular/core/testing';

import { BuscaWikiService } from './busca-wiki.service';

describe('BuscaWikiService', () => {
  let service: BuscaWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
