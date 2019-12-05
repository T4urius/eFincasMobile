import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit {

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
