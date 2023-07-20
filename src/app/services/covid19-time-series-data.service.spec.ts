import { TestBed } from '@angular/core/testing';

import { Covid19TimeSeriesDataService } from './covid19-time-series-data.service';

describe('Covid19TimeSeriesDataService', () => {
  let service: Covid19TimeSeriesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19TimeSeriesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
