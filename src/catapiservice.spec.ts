import { TestBed } from '@angular/core/testing';

import { Catapiservice } from './catapiservice';

describe('Catapiservice', () => {
  let service: Catapiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Catapiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
