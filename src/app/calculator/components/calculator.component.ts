import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

// Services
import { CalculatorService } from "../services";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operation: string;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
    this.clean()
  }

  clean(): void {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(number: string): void {
    if(this.operation === null){
      this.num1 = this.concatenateNumber(this.num1, number)
    } else {
      this.num2 = this.concatenateNumber(this.num2, number)
    }
  }

  concatenateNumber(actualNumber: string, numConcat: string): string{
    if(actualNumber === '0' || actualNumber === null){
      actualNumber = '';
    }

    if(numConcat === '.' && actualNumber === ''){
      return '0.'
    }

    if(numConcat === '.' && actualNumber.indexOf('.') > -1 ){
      return actualNumber;
    }

    return actualNumber + numConcat
  }


  defineOperation(operation: string): void{
    if(this.operation === null){
      this.operation = operation;
      return
    }
    this.operation = operation;
  }

  calcular(): void {
    if(this.num2 === null){
      return
    }
    this.result = this.calculatorService.calculate(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operation
    )
  }

  get display(): string {
    if(this.result !== null){
      return this.result.toString()
    } 
    if(this.num2 !== null){
      return this.num2;
    }
    return this.num1
  }

}
