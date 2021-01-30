import { TestBed } from '@angular/core/testing';

import { FakeFormateurItemService } from './fake-formateur-item.service';

describe('FakeFormateurItemService', () => {
  let service: FakeFormateurItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeFormateurItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
