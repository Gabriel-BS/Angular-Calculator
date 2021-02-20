import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculatorService } from '../services';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [
        CalculatorService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should garantee that 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'))
    let btnAddition = fixture.debugElement.query(By.css('#btnSoma'))
    let btn2 = fixture.debugElement.query(By.css('#btn2'))
    let btnCalculate = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5')
  })

  it('should that 0. is added when dot is pressed', () => {
    let btnDecimal = fixture.debugElement.query(By.css('#btnDecimal'))
    let display = fixture.debugElement.query(By.css('#display'))

    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('0.')
  })

  
  it('should test operation', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'))
    let btnAddition = fixture.debugElement.query(By.css('#btnSoma'))
    let display = fixture.debugElement.query(By.css('#display'))

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('3')
  })


  it('should not add another dot when one is already there', () => {
    let btnDecimal = fixture.debugElement.query(By.css('#btnDecimal'))
    let display = fixture.debugElement.query(By.css('#display'))

    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('0.')

    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('0.')
  })

  it('should do nothing when operation is null', () => {
    let btnCalculate = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('0')
  })


});
