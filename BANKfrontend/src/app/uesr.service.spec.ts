import { TestBed } from '@angular/core/testing';

import { UesrService } from './uesr.service';

describe('UesrService', () => {
  let service: UesrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UesrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
