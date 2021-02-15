// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CalculatorComponent } from './components';

// Providers
import { CalculatorService} from "./services";


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
