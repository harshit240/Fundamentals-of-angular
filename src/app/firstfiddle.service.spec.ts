import { TestBed } from '@angular/core/testing';

import { FirstfiddleService } from './firstfiddle.service';

describe('FirstfiddleService', () => {
  let service: FirstfiddleService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstfiddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
