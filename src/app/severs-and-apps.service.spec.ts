import { TestBed } from '@angular/core/testing';

import { SeversAndAppsService } from './severs-and-apps.service';

describe('SeversAndAppsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeversAndAppsService = TestBed.get(SeversAndAppsService);
    expect(service).toBeTruthy();
  });
});
