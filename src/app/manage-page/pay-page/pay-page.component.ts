import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ContaService, Conta } from 'src/app/contas.service';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.scss'],
})
export class PayPageComponent implements OnInit {

  months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  contas: any[];
  model: Conta;

  constructor(public navCtrl: NavController, private toast:
    ToastController, private contaService: ContaService) {
    this.model = new Conta();
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.getAllPay();
  }

  async getAllPay() {
    try {
      this.contaService.getAll()
        .then((result: any[]) => {

          let pagar = result.reduce((ids, result) => {

            if (result.id_type == 1) {
              ids.push(result);
            }
            return ids;
          }, []);

          this.contas = pagar;
        });
    } catch {
      const toast = await this.toast.create({
        message: 'Não foi possível carregar as contas',
        duration: 3000
      });
      toast.present();
    }
  }


  save() {
    this.saveConta().then(async () => {
      const toast = await this.toast.create({
        message: 'Conta salva',
        color: 'success',
        duration: 3000
      });
      toast.present();
      this.navCtrl.navigateBack('');
    }).catch(async () => {
      const toast = await this.toast.create({
        message: 'Não foi possível salvar a conta',
        color: 'error',
        duration: 3000
      });
      toast.present();
    });
  }

  private saveConta() {
    this.model.type = 1;
    return this.contaService.insert(this.model);
  }

}
