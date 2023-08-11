import { TestBed } from '@angular/core/testing';

import { ViewPizzaGuard } from './view-pizza.guard';

describe('ViewPizzaGuard', () => {
  let guard: ViewPizzaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewPizzaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
