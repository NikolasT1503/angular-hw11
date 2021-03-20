import { TestBed } from '@angular/core/testing';

import { HttpConcatAddressInterceptor } from './http-concat-address.interceptor';

describe('HttpConcatAddressInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpConcatAddressInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpConcatAddressInterceptor = TestBed.inject(HttpConcatAddressInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
