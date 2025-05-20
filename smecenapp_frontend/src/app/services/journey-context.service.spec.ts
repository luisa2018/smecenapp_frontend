import { TestBed } from '@angular/core/testing';

import { JourneyContextService } from './journey-context.service';

describe('JourneyContextService', () => {
  let service: JourneyContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
