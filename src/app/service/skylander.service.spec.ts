import { TestBed } from '@angular/core/testing';

import { SkylanderService } from './skylander.service';

describe('SkylanderService', () => {
  let service: SkylanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkylanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
