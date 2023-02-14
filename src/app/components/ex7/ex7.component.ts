import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css'],
})
export class Ex7Component {
  inputValido: boolean;

  validaInput(entrada: string): void {
    if (entrada.trim().length >= 3) this.inputValido = true;
    else this.inputValido = false;
  }
}
