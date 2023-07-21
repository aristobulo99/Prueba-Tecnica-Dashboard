import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fileControlGuard } from './file-control.guard';

describe('fileControlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fileControlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
