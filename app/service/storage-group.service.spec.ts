import { TestBed } from '@angular/core/testing';

import { StorageGroupService } from './storage-group.service';

describe('StorageGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageGroupService = TestBed.get(StorageGroupService);
    expect(service).toBeTruthy();
  });
});
