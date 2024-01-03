import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  num1!: number;
  num2!: number;
  res: number = 0;

  add(): void{
    this.res = +this.num1 + +this.num2;
  }

  minus(): void{
    this.res = +this.num1 - +this.num2;
  }

  prod(): void{
    this.res = +this.num1 * +this.num2;
  }

  div(): void{
    this.res = +this.num1 / +this.num2;
  }
}
