import { TestBed } from '@angular/core/testing';

import { SuperuserserviceService } from './superuserservice.service';

describe('SuperuserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperuserserviceService = TestBed.get(SuperuserserviceService);
    expect(service).toBeTruthy();
  });
});
