import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // @ViewChild('ionSlidesSaldoPagar', { read: ElementRef, static: false }) ionSlide: ElementRef;

  slideOpts = {
    speed: 400,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  }

  items = [

    { id: 1, name: 'Salário inserido no valor de R$ 600,00' },
    { id: 2, name: 'Salário inserido no valor de R$ 700,00' },
    { id: 3, name: 'Salário inserido no valor de R$ 100,00' },
    { id: 4, name: 'Salário inserido no valor de R$ 1000,00' },
    { id: 5, name: 'Salário inserido no valor de R$ 900,00' },
    { id: 6, name: 'Transferência inserido no valor de R$ 300,00' },
    { id: 7, name: 'Transferência inserida no valor de R$ 450,00' },
    { id: 8, name: 'Renda Extra inserida no valor de R$ 100,00' },
    { id: 9, name: 'Dispesa inserida no valor de R$ 90,00' },
    { id: 10, name: 'Dispesa inserida no valor de R$ 20,00' },
  ];

  constructor(private navCtrl: NavController) {
  }

  openRegisters() {
    this.navCtrl.navigateForward('register');
  }

  openManage() {
    this.navCtrl.navigateForward('manage');
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
