import { TestBed } from '@angular/core/testing';

import { MarsWeatherService } from './mars-weather.service';

describe('MarsWeatherService', () => {
  let service: MarsWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
