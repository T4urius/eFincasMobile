import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // @ViewChild('ionSlidesSaldoPagar', { read: ElementRef, static: false }) ionSlide: ElementRef;
  @ViewChild('eyeOff', { read: ElementRef, static: false }) eyeOff: ElementRef;
  @ViewChild('totalSaldo', { read: ElementRef, static: false }) totalSaldo: ElementRef;
  @ViewChild('receber', { read: ElementRef, static: false }) receber: ElementRef;

  @ViewChild('eyePagar', { read: ElementRef, static: false }) eyePagar: ElementRef;
  @ViewChild('totalPagar', { read: ElementRef, static: false }) totalPagar: ElementRef;
  @ViewChild('pagar', { read: ElementRef, static: false }) pagar: ElementRef;

  slideOpts = {
    speed: 400,
    initialSlide: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  }

  items = [

    { id: 1, name: 'Salário', valor: 'R$ 600,00', date: '10 de Abril', expanded: false },
    { id: 2, name: 'Salário', valor: 'R$ 700,00', date: '20 de Junho', expanded: false },
    { id: 3, name: 'Salário ', valor: 'R$ 100,00', date: '20 de Dezembro', expanded: false },
    { id: 4, name: 'Salário ', valor: 'R$ 1000,00', date: '20 de Agosto', expanded: false },
    { id: 5, name: 'Salário ', valor: 'R$ 900,00', date: '20 de Janeiro', expanded: false },
    { id: 6, name: 'Transferência ', valor: 'R$ 300,00', date: '20 de Maio', expanded: false },
    { id: 7, name: 'Transferência ', valor: 'R$ 450,00', date: '20 de Março', expanded: false },
    { id: 8, name: 'Renda Extra ', valor: 'R$ 100,00', date: '20 de Julho', expanded: false },
    { id: 9, name: 'Despesa ', valor: 'R$ 90,00', date: '20 de Setembro', expanded: false },
    { id: 10, name: 'Despesa ', valor: 'R$ 20,00', date: '20 de Outubro', expanded: false },
  ];

  constructor(private navCtrl: NavController) {
  }

  openRegisters() {
    this.navCtrl.navigateForward('register');
  }

  openManagePay() {
    this.navCtrl.navigateForward('manage/pay');
  }

  openManageReceive() {
    this.navCtrl.navigateForward('manage/receive');
  }

  openInvestments() {
    this.navCtrl.navigateForward('investments');
  }

  openConfigures() {
    this.navCtrl.navigateForward('configures');
  }

  openHome() {
    this.navCtrl.navigateForward('');
  }

  hideSaldo() {
    this.eyeOff.nativeElement.style.visibility = 'visible';
    this.receber.nativeElement.style.visibility = 'hidden';
    this.totalSaldo.nativeElement.style.visibility = 'hidden';
  }

  hidePagar() {
    this.eyePagar.nativeElement.style.visibility = 'visible';
    this.pagar.nativeElement.style.visibility = 'hidden';
    this.totalPagar.nativeElement.style.visibility = 'hidden';
  }

  showSaldo() {
    this.receber.nativeElement.style.visibility = 'visible';
    this.totalSaldo.nativeElement.style.visibility = 'visible';
    this.eyeOff.nativeElement.style.visibility = 'hidden';
  }

  showPagar() {
    this.eyePagar.nativeElement.style.visibility = 'hidden';
    this.pagar.nativeElement.style.visibility = 'visible';
    this.totalPagar.nativeElement.style.visibility = 'visible';
  }

  openHelp() {
    console.log('ajudando');
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    }
    else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }

  // toggleIsActive(e) {
  //   if (e.detail.checked == true) {
  //     this.ionSlide.nativeElement.style.backgroundColor = 'black';
  //   }
  //   else {
  //     this.ionSlide.nativeElement.style.backgroundColor = 'azure';
  //   }
  // }

}
