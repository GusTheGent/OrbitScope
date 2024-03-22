import { TestBed } from '@angular/core/testing';

import { SolarSystemService } from './solar-system.service';

describe('SolarSystemService', () => {
  let service: SolarSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
