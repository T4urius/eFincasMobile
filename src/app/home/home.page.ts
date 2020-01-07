import { Component, ViewChild, ElementRef, Pipe, PipeTransform, OnChanges } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ContaService, Conta } from '../contas.service';
import { getLocaleMonthNames } from '@angular/common';

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

  @ViewChild('totalInvestimentos', { read: ElementRef, static: false }) totalInvestimentos: ElementRef;
  @ViewChild('eyeInvestimentos', { read: ElementRef, static: false }) eyeInvestimentos: ElementRef;

  slideOpts = {
    speed: 400,
    initialSlide: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  }

  private contas: any[] = [];
  private pTotal: number = 0;
  private pReceber: number = 0;
  private sTotal: number = 0;
  private investimentos: number = 0;
  private dateNow = new Date();

  constructor(private navCtrl: NavController, private toast: ToastController, private contaService: ContaService) {
  }

  async ionViewDidEnter() {
    await this.getAllContas();
    await this.calcular();
  }

  async calcular() {
    let valuePagar: number = 0;
    let valueReceber: number = 0;

    await this.contaService.getAll()
      .then((result: any[]) => {
        if (result != null) {
          let pagar = result.filter(e => e.id_type == 1);
          let receber = result.filter(e => e.id_type == 2);

          pagar.reduce((i, result) => {
            let monthPagar = new Date(result.date).getMonth();
            let dayPagar = new Date(result.date).getDate();
            if (monthPagar == this.dateNow.getMonth()) {
              valuePagar += parseInt(result.value);
              this.pTotal = valuePagar;
            }
          }, 0);

          receber.reduce((i, result) => {
            let monthSaldo = new Date(result.date).getMonth();
            let daySaldo = new Date(result.date).getDate();
            if (monthSaldo <= this.dateNow.getMonth() && daySaldo <= this.dateNow.getDate()) {
              valueReceber += parseInt(result.value);
              this.sTotal = valueReceber;
              valueReceber = 0;
            }
            else if (monthSaldo >= this.dateNow.getMonth() && daySaldo > this.dateNow.getDate()) {
              valueReceber += parseInt(result.value);
              this.pReceber = valueReceber;
            }
          }, 0);
        }
      })
  }

  async getAllContas() {
    try {
      this.contaService.getAll()
        .then((result: any[]) => {
          this.contas = result;
        });
    } catch {
      const toast = await this.toast.create({
        message: 'Não foi possível carregar as contas',
        duration: 3000
      });
      toast.present();
    }
  }

  async removeConta(contas: Conta) {
    await this.contaService.remove(contas.id)
      .then(async () => {
        // Removendo do array de produtos
        var index = this.contas.indexOf(contas);
        this.contas.splice(index, 1);
        const toast = await this.toast.create({ message: 'Produto removido.', duration: 3000, position: 'bottom' });
        toast.present();
        await this.calcular();
      })
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

  hideInvestimentos() {
    this.eyeInvestimentos.nativeElement.style.visibility = 'visible';
    this.totalInvestimentos.nativeElement.style.visibility = 'hidden';
  }

  hidePagar() {
    this.eyePagar.nativeElement.style.visibility = 'visible';
    this.totalPagar.nativeElement.style.visibility = 'hidden';
  }

  showSaldo() {
    this.totalSaldo.nativeElement.style.visibility = 'visible';
    this.eyeOff.nativeElement.style.visibility = 'hidden';
  }

  showInvestimentos() {
    this.totalInvestimentos.nativeElement.style.visibility = 'visible';
    this.eyeInvestimentos.nativeElement.style.visibility = 'hidden';
  }

  showPagar() {
    this.eyePagar.nativeElement.style.visibility = 'hidden';
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
      this.contas.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  // toggleIsActive(e) {
  //   if (e.detail.checked == true) {
  //     this.ionSlide.nativeElement.style.backgroundColor = 'black';
  //   }
  //   else {
  //     this.ionSlide.nativeElement.style.backgroundColor = 'azure';
  //   }
  // }
}
