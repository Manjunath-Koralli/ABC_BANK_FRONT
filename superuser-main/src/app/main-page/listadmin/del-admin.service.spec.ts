import { TestBed } from '@angular/core/testing';

import { DelAdminService } from './del-admin.service';

describe('DelAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelAdminService = TestBed.get(DelAdminService);
    expect(service).toBeTruthy();
  });
});
