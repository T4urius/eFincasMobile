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
  private sTotal: number = 0;
  private pReceber: number = 0;
  private sReceber: number = 0;
  private investimentos: number = 0;
  private dateNow = new Date();

  constructor(private navCtrl: NavController, private toast: ToastController, private contaService: ContaService) {
  }

  async ionViewDidEnter() {
    await this.getAllContas();
    await this.calcularTotal();
    await this.calcularReceber();
  }

  async calcularReceber() {
    let valuePagar: number = 0;
    let valueReceber: number = 0;

    //Acessando todos os registros de conta
    await this.contaService.getAll()
      .then((result: any[]) => {
        if (result != null) {

          //gerando a lista com o type pagar
          let pagar = result.reduce((ids, result) => {

            if (result.id_type == 1) {
              ids.push(result);
            }
            return ids;
          }, []);

          //fazendo a soma de todos os values de pagar
          for (let i = 0; i < pagar.length; i++) {
            valuePagar += parseInt(pagar[i].value);
          }
          this.sReceber = valuePagar;
          valuePagar = 0;

          //gerando a lista com o type receber
          let receber = result.reduce((ids, result) => {

            let monthDate = result.date.substr(5, 2);
            let dayDate = result.date.substr(8, 2);

            //regra para validação se o mês de recebimento é maior ou igual que o mês atual
            if (result.id_type == 2 && monthDate >= this.dateNow.getMonth() + 1 && dayDate > this.dateNow.getDate()) {
              ids.push(result);
            }
            return ids;
          }, []);

          //fazendo a soma de todos os values de receber
          for (let i = 0; i < receber.length; i++) {
            valueReceber += parseInt(receber[i].value);
          }
          this.pReceber = valueReceber;
          valueReceber = 0;
        }
      })
  }

  async calcularTotal() {
    let valuePagar: number = 0;
    let valueReceber: number = 0;

    //acessando todos os registros de conta
    await this.contaService.getAll()
      .then((result: any[]) => {
        if (result != null) {

          //gerando lista de receber com o type 2
          var receber = result.reduce((ids, result) => {

            let monthDate = result.date.substr(5, 2);
            let dayDate = result.date.substr(8, 2);

            if (result.id_type == 2) {
              if (monthDate < this.dateNow.getMonth() + 1) {
                ids.push(result);
              }
              else if (monthDate == this.dateNow.getMonth() + 1) {
                if (dayDate <= this.dateNow.getDate()) {
                  ids.push(result);
                }
              }
            }
            return ids;
          }, []);

          for (let i = 0; i < receber.length; i++) {
            valueReceber += parseInt(receber[i].value);
          }
          this.sTotal = valueReceber;
          valueReceber = 0;

          let apagar = result.filter(x => x.id_type == 1);
          let areceber = result.filter(x => x.id_type == 2);
          let dayAReceber = areceber.filter(x => new Date(x.date).getDay());


          let dayAPagar = apagar.filter(x => new Date(x.date).getDate() < 25);

          for (let i = 0; i < dayAPagar.length; i++) {
            valuePagar += parseInt(dayAPagar[i].value);
          }
          this.pTotal = valuePagar;
          valuePagar = 0;

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
        await this.calcularTotal();
        await this.calcularReceber();
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
    this.pagar.nativeElement.style.visibility = 'hidden';
    this.totalPagar.nativeElement.style.visibility = 'hidden';
  }

  showSaldo() {
    this.receber.nativeElement.style.visibility = 'visible';
    this.totalSaldo.nativeElement.style.visibility = 'visible';
    this.eyeOff.nativeElement.style.visibility = 'hidden';
  }

  showInvestimentos() {
    this.totalInvestimentos.nativeElement.style.visibility = 'visible';
    this.eyeInvestimentos.nativeElement.style.visibility = 'hidden';
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
