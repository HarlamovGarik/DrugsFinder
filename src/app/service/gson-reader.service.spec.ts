import { TestBed } from '@angular/core/testing';

import { GsonReaderService } from './gson-reader.service';

describe('GsonReaderService', () => {
  let service: GsonReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsonReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
