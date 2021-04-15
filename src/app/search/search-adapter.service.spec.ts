import {TestBed} from '@angular/core/testing';

import {SearchAdapterService} from './search.adapter';

describe('SearchAdapterService', () => {
  let service: SearchAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
