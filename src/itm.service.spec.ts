import { TestBed } from '@angular/core/testing';

import { ItmService } from './itm.service';

describe('ItmService', () => {
  let service: ItmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
