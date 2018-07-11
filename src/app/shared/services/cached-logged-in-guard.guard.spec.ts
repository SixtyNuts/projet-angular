import { TestBed, async, inject } from '@angular/core/testing';

import { CachedLoggedInGuardGuard } from './cached-logged-in-guard.guard';

describe('CachedLoggedInGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachedLoggedInGuardGuard]
    });
  });

  it('should ...', inject([CachedLoggedInGuardGuard], (guard: CachedLoggedInGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
