import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = '02-BASES: Mi Primera App de Angular';
  // public counter: number = 10;

  // increaseBy(value:string):void{
    // if(value=='+'){
    //   this.counter+=1;
    // }else{
    //   this.counter-=1;
    // }
  //   value=='+'? this.counter+=1 : this.counter-=1;
  // }

  // increaseBy(value:number):void{
  //   this.counter+=value;
  // }

  // resetCounter():void{
  //   this.counter=10;
  // }
}
