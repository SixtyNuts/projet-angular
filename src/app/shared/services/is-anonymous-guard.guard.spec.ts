import { TestBed, async, inject } from '@angular/core/testing';

import { IsAnonymousGuardGuard } from './is-anonymous-guard.guard';

describe('IsAnonymousGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAnonymousGuardGuard]
    });
  });

  it('should ...', inject([IsAnonymousGuardGuard], (guard: IsAnonymousGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
