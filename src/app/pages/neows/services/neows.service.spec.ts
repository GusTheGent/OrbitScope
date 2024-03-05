import { TestBed } from '@angular/core/testing';

import { NeowsService } from './neows.service';

describe('NeowsService', () => {
  let service: NeowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
