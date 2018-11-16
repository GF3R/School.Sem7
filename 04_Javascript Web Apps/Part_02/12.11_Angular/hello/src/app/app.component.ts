import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
  title = 'My Page';
  public name: string;
  public greeting: string;

  public sayHello() {
      this.greeting = 'Hello ' + this.name + '!';
      this.name = '';
  }
}
