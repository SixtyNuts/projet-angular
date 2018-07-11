import { TestBed, inject } from '@angular/core/testing';

import { RealTimeLoggedInGuard } from './real-time-logged-in-guard.service';

describe('RealTimeLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealTimeLoggedInGuard]
    });
  });

  it('should be created', inject([RealTimeLoggedInGuard], (service: RealTimeLoggedInGuard) => {
    expect(service).toBeTruthy();
  }));
});
