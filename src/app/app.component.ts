import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'anyValue';

  firstNumber: number = 0;
  secondNumber: number = 0;
  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string) {
    if (this.calNumber !== 'anyValue') {
      this.calNumber += val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    if(val === "c" ) {
      this.ClearAll()
    }
    else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'anyValue';
      this.funcT = val;
    } else if (this.funcT !== 'NoFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcT == '+') {
    }
    let Total = 0;
    switch (this.funcT) {
      case '+':
        Total = this.firstNumber + this.secondNumber;
        this.totalAsagneeValues(Total,val);
        break;
      case '-':
        Total = this.firstNumber - this.secondNumber;
       this.totalAsagneeValues(Total,val)
        break;
      case '/':
        Total = this.firstNumber / this.secondNumber;
       this.totalAsagneeValues(Total,val)
        break;
      case '*':
        Total = this.firstNumber * this.secondNumber;
       this.totalAsagneeValues(Total,val)
        break;
      case '%':
        Total = this.firstNumber % this.secondNumber;
       this.totalAsagneeValues(Total,val)
        break;
    }
    this.calValue = Total;
    this.calNumber = Total.toString();
    this.funcT = 'NoFunction';
  }
  totalAsagneeValues(Total:number,val:string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.calValue = 0;
    this.calNumber = 'anyValue';
    this.funcT = val;
    if(val ==='='){this.onEqualPress()}
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = "NoFunction"
    this.calNumber = "anyValue"
  }
  ClearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = "NoFunction"
    this.calNumber = "anyValue"
    this.calValue = 0
  }
}
