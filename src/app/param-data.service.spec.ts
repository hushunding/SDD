import { TestBed, inject } from '@angular/core/testing';

import { ParamDataService } from './param-data.service';

describe('ParamDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamDataService]
    });
  });

  it('should be created', inject([ParamDataService], (service: ParamDataService) => {
    expect(service).toBeTruthy();
  }));
});
