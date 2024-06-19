import { TestBed } from '@angular/core/testing';

import { NumericService } from './numeric.service';

fdescribe('NumericService', () => {
  let service: NumericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should be multiple of two numbers",()=>{
    const result = service.multipleOfTwo(5,2);
    expect(result).toEqual(10);
  })
});
