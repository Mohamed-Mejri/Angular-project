import { TestBed } from '@angular/core/testing';

import { FakeParticipantsItemService } from './fake-participants-item.service';

describe('FakeParticipantsItemService', () => {
  let service: FakeParticipantsItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeParticipantsItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
