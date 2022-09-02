import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Lucas Santos';
  nascimento = 2000;
  counter = 0;
  timer = setInterval(() => {
    this.counter++;
  }, 100);

  getIdade() {
    return 2022 - this.nascimento;
  }

  getMinuto() {
    return Math.trunc(this.counter / 60);
  }

  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
}
