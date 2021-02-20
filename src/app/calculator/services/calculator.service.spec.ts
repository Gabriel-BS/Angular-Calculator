import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should guarantee  that 1 + 4 = 5', (inject([CalculatorService], (service: CalculatorService) => {
    let addition = service.calculate(1,4, CalculatorService.ADDITION)
    expect(addition).toEqual(5)
  })))

  it('Should guarantee  that 4 - 1 = 3', (inject([CalculatorService], (service: CalculatorService) => {
    let subtraction = service.calculate(4,1, CalculatorService.SUBTRACTION)
    expect(subtraction).toEqual(3)
  })))
  
  it('Should guarantee  that 1 * 4 = 4', (inject([CalculatorService], (service: CalculatorService) => {
    let multiplication = service.calculate(1,4, CalculatorService.MULTIPLICATION)
    expect(multiplication).toEqual(4)
  })))

  it('Should guarantee  that 4 / 2 = 2', (inject([CalculatorService], (service: CalculatorService) => {
    let division = service.calculate(4,2, CalculatorService.DIVISION)
    expect(division).toEqual(2)
  })))

  it('Should guarantee that an unknown operation will return 0', (inject([CalculatorService], (service: CalculatorService) => {
    let unknownOperation = service.calculate(4,1, 'other')
    expect(unknownOperation).toEqual(0)
  })))
});






 