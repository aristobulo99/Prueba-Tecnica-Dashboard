import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginControlGuard } from './login-control.guard';

describe('loginControlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginControlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
