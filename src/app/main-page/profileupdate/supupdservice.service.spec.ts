import { TestBed } from '@angular/core/testing';

import { SupupdserviceService } from './supupdservice.service';

describe('SupupdserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupupdserviceService = TestBed.get(SupupdserviceService);
    expect(service).toBeTruthy();
  });
});
