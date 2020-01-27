import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.scss']
})
export class OutputDecoratorComponent implements OnInit {
@Input('master') masterName: string;
@Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleclick() {
    this.valueChange.emit("Hello Parent")
  }

}
