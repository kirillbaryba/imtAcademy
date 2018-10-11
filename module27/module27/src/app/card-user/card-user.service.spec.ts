import { TestBed } from '@angular/core/testing';

import { CardUserService } from './card-user.service';

describe('CardUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardUserService = TestBed.get(CardUserService);
    expect(service).toBeTruthy();
  });
});
