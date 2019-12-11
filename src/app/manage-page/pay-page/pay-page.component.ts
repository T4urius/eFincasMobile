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

  getAllContas() {
    this.contaService.getAll().then((result: any[]) => {
      this.contas = result;
    })
  }

  ionViewDidLoad() {
    this.getAllContas();

    this.contaService.getAll().then((result: any[]) => {
      this.contas = result;
    })
      .catch(async () => {
        const toast = await this.toast.create({
          message: 'Erro ao carregar contas',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      })
  }

  ngOnInit() {
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
    return this.contaService.insert(this.model);
  }

}
