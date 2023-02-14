import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhilips',
})
export class CaptalizePhilipsPipe implements PipeTransform {
  transform(frase: string): string {
    let arrPalavras = frase.split(' ');

    let arrPalavrasCaptalizadas = arrPalavras.map((palavra) => {
      return palavra[0].toUpperCase() + palavra.slice(1);
    });

    return arrPalavrasCaptalizadas.join(' ');
  }
}
