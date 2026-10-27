import { TestBed } from '@angular/core/testing';

import { VersionHomepage } from './version-homepage';

describe('VersionHomepage', () => {
  let service: VersionHomepage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersionHomepage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
