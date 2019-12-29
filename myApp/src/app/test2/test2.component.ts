import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      <input type="text" value="AJ" [class]="text2">
      <input type="text" value="AJ" [ngClass]="text" #myName>
      <input type="text" value="AJ" [style.color]="'red'">
      <input type="text" value="AJ" [style.color]="isTr ? 'red' : 'green'">
      <button (click)="onClick($event)" >GO</button>
      <button (click)="logMess(myName)" >Template Ref Variable</button>
      {{message}}
      {{myName2}}
      <label>Two way binding  <input type="text" [(ngModel)]="myName2" /></label>
      <p></p>
    </p>
  `,
  styles: [`
  .text-red { color: red; }
  .text-blue { color: blue; }
  `]
})
export class Test2Component implements OnInit {
  isTr = false;
  text2 = "text-blue";
  message = "";
  text = {
    "text-red" : !this.isTr,
    "text-blue" : this.isTr
  };
  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log('Welcome');
    console.log(event);
    this.message = "welcome to my Page";
  }
  logMess(myInp) {
    this.message = myInp.value;
  }

}
