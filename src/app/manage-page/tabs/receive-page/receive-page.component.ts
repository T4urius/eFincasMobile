import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-page',
  templateUrl: './receive-page.component.html',
  styleUrls: ['./receive-page.component.scss'],
})
export class ReceivePageComponent implements OnInit {

  items = [
    { id: 1, name: 'Salário', valor: 'R$ 600,00', date: '10 de Abril', expanded: false },
    { id: 2, name: 'Salário', valor: 'R$ 700,00', date: '20 de Junho', expanded: false },
    { id: 3, name: 'Salário ', valor: 'R$ 100,00', date: '20 de Dezembro', expanded: false },
    { id: 4, name: 'Salário ', valor: 'R$ 1000,00', date: '20 de Agosto', expanded: false },
    { id: 5, name: 'Salário ', valor: 'R$ 900,00', date: '20 de Janeiro', expanded: false },    
  ]

  tipoRecebimentos = [
    { id: 1, type: 'salary', name: 'Salário'},
    { id: 2, type: 'transfer', name: 'Transferência'},
    { id: 3, type: 'other', name: 'Outros'},
  ]

  constructor() { }

  ngOnInit() { }

}
