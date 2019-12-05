import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {

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
}
