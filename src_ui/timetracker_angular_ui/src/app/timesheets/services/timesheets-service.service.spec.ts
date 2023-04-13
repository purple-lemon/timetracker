import { TestBed } from '@angular/core/testing';

import { TimesheetsServiceService } from './timesheets-service.service';

describe('TimesheetsServiceService', () => {
  let service: TimesheetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
