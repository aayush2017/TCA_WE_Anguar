import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test1]',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }
  public name = "John";
  public isDis = false;
  public backgroundImgUrl = "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
  public abc() {
    return "John";
  }
  ngOnInit() {
  }

}
