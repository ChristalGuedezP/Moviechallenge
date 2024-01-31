// cards.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() movies: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Puedes agregar lógica de inicialización si es necesario
  }
}
