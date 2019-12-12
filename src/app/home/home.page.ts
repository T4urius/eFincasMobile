import { Component, ViewChild, ElementRef, Pipe, PipeTransform, OnChanges } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ContaService, Conta } from '../contas.service';

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

  contas: any[] = [];
  pTotal: number = 0;
  values: number = 0;
  sTotal: number = 0;

  constructor(private navCtrl: NavController, private toast: ToastController, private contaService: ContaService) {
  }

  async ionViewDidEnter() {
    await this.getAllContas();
    await this.somaAPagar();
    await this.somaSaldo();
  }

  async somaSaldo() {
    await this.contaService.getAll()
      .then((result: any[]) => {
        if (result != null) {

          let saldo = result.reduce((ids, result) => {

            if (result.id_type == 2) {
              ids.push(result);
            }
            return ids;
          }, []);

          for (let i = 0; i < saldo.length; i++) {
            this.values += parseInt(saldo[i].value);
          }
          this.sTotal = this.values;
          this.values = 0;
        }
      })
  }

  async somaAPagar() {
    await this.contaService.getAll()
      .then((result: any[]) => {
        if (result != null) {
          let pagar = result.reduce((ids, result) => {

            if (result.id_type == 1) {
              ids.push(result);
            }
            return ids;
          }, []);

          for (let i = 0; i < pagar.length; i++) {
            this.values += parseInt(pagar[i].value);
          }
          this.pTotal = this.values;
          this.values = 0;
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
        await this.somaAPagar();
        await this.somaSaldo();
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
