import { TestBed } from '@angular/core/testing';

import { CaretypeService } from './caretype.service';

describe('CaretypeService', () => {
  let service: CaretypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaretypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
