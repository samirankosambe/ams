import { TestBed } from '@angular/core/testing';

import { UserMasterServiceService } from './user-master-service.service';

describe('UserMasterServiceService', () => {
  let service: UserMasterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMasterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
