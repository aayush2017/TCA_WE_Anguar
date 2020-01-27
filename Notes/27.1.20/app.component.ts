import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angApp';
  master = "Hello Child";
  public isT = true;
  public text = {
    "text-red": this.isT,
    "text-green": !this.isT 
  }
  displayChildMess(event) {
    alert(event);
  }
}
