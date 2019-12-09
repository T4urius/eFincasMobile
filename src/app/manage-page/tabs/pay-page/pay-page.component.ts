import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.scss'],
})
export class PayPageComponent implements OnInit {

  months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

  items = [
    { id: 1, name: 'Salário', valor: 'R$ 600,00', expanded: false },
    { id: 2, name: 'Salário', valor: 'R$ 700,00', expanded: false },
    { id: 3, name: 'Salário ', valor: 'R$ 100,00', expanded: false },
    { id: 4, name: 'Salário ', valor: 'R$ 1000,00', expanded: false },
    { id: 5, name: 'Salário ', valor: 'R$ 900,00', expanded: false },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
