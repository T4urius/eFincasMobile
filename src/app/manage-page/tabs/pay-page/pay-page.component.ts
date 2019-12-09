import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.scss'],
})
export class PayPageComponent implements OnInit {

  months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

  items = [
    { id: 1, name: 'Despesa ', valor: 'R$ 90,00', date: '20 de Setembro', expanded: false },
    { id: 2, name: 'Despesa ', valor: 'R$ 20,00', date: '20 de Outubro', expanded: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
