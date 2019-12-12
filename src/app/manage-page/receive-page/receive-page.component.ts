import { Component, OnInit } from '@angular/core';
import { Conta, ContaService } from 'src/app/contas.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-receive-page',
  templateUrl: './receive-page.component.html',
  styleUrls: ['./receive-page.component.scss'],
})
export class ReceivePageComponent implements OnInit {

  months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  contas: any[];
  model: Conta;

  tipoRecebimentos = [
    { id: 1, type: 'salary', name: 'Salário' },
    { id: 2, type: 'transfer', name: 'Transferência' },
    { id: 3, type: 'other', name: 'Outros' },
  ]

  constructor(public navCtrl: NavController, private toast:
    ToastController, private contaService: ContaService) {
    this.model = new Conta();
  }

  ngOnInit() { }

  async ionViewDidEnter() {
    await this.getAllReceive();
  }

  async getAllReceive() {
    try {
      this.contaService.getAll()
        .then((result: any[]) => {
          let saldo = result.reduce((ids, result) => {

            if (result.id_type == 2) {
              ids.push(result);
            }
            return ids;
          }, []);

          this.contas = saldo;
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
    this.model.type = 2;
    return this.contaService.insert(this.model);
  }

}
