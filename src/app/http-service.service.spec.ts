import { TestBed } from '@angular/core/testing';

import { MyHttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: MyHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
