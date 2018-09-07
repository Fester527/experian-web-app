import { TestBed, inject } from '@angular/core/testing';

import { ZipCodeDataService } from './zip-code-data.service';

describe('ZipCodeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipCodeDataService]
    });
  });

  it('should be created', inject([ZipCodeDataService], (service: ZipCodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
