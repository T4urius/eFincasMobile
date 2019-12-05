import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-investments-page',
  templateUrl: './investments-page.component.html',
  styleUrls: ['./investments-page.component.scss'],
})
export class InvestmentsPageComponent implements OnInit {

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
