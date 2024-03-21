import { TestBed } from '@angular/core/testing';

import { SnapiService } from './snapi.service';

describe('SnapiService', () => {
  let service: SnapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
