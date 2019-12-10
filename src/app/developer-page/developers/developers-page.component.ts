import { Component, OnInit } from '@angular/core';
import { Dev, DatabaseService } from '../../services/database.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-developers-page',
  templateUrl: './developers-page.component.html',
  styleUrls: ['./developers-page.component.scss'],
})
export class DevelopersPageComponent implements OnInit {

  developers: Dev[] = [];

  products: Observable<any[]>;

  developer = {};
  product = {};

  selectedView = 'devs';

  skills = '';

  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        })
        this.products = this.db.getProducts();
      }
    });
  }

  addDeveloper() {
    let skills = this.developer['skills'].split(',');
    skills = skills.map(skill => skill.trim());

    this.db.addDeveloper(this.developer['name'], skills, this.developer['img'])
      .then(_ => {
        this.developer = {};
      });
  }

  addProduct() {
    this.db.addProduct(this.product['name'], this.product['creator'])
      .then(_ => {
        this.product = {};
      });
  }


}
