import { TestBed } from '@angular/core/testing';

import { ApodServiceService } from './apod.service';

describe('ApodServiceService', () => {
  let service: ApodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
