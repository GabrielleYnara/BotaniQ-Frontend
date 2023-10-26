import { TestBed } from '@angular/core/testing';

import { GardenService } from './garden.service';

describe('GardenService', () => {
  let service: GardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
