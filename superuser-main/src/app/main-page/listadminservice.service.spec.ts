import { TestBed } from '@angular/core/testing';

import { ListadminserviceService } from './listadminservice.service';

describe('ListadminserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadminserviceService = TestBed.get(ListadminserviceService);
    expect(service).toBeTruthy();
  });
});
