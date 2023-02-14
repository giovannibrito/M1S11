import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css'],
})
export class Ex3Component {
  arrayFotos: any = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/2021-06-02_18-11-10_arc-en-ciel-Belfort.jpg',
      description: 'Arco-iris em Belfort, França',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/STS003-14-671_-_View_of_Puerto_Rico.jpg',
      description: 'Imagem de satélite de Porto Rico',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/ISS055-E-41287_-_View_of_Oman.jpg',
      description: 'Omã vista do espaço',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/%E0%A6%AC%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%A4%E0%A7%81%E0%A6%B2_%E0%A6%AE%E0%A7%8B%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%B0%E0%A6%AE.jpg',
      description: 'Mesquita em Bangladesh',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg',
      description: 'Laranja',
    },
  ];
}
