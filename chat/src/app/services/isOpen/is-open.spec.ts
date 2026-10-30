import { TestBed } from '@angular/core/testing';

import { IsOpen } from './is-open';

describe('IsOpen', () => {
  let service: IsOpen;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsOpen);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
