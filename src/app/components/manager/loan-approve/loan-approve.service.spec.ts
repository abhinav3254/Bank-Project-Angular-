import { TestBed } from '@angular/core/testing';

import { LoanApproveService } from './loan-approve.service';

describe('LoanApproveService', () => {
  let service: LoanApproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanApproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
