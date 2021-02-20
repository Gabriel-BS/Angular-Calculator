import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  /**
   * Define constants that represents the Mathematical operations
   * That will be used by our calculator
   */
  static readonly ADDITION: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
   * Method that calculates mathematical operations for the
   * the calculator, supports addition, subtraction, divison and
   * multiplication
   * @param num1 
   * @param num2 
   * @param operation 
   * @return Number, Result of the mathematical operations
   */
  calculate(num1: number, num2: number, operation:string): number {
    let result: number
    switch (operation) {
      case CalculatorService.ADDITION:
        result = num1 + num2;
        break;
      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
        break;
      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
        break;
      case CalculatorService.DIVISION:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result
  }
}
