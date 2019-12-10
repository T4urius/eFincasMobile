import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Dev, DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-developer.page',
  templateUrl: './developer-page.component.html',
  styleUrls: ['./developer-page.component.scss'],
})
export class DeveloperPageComponent implements OnInit {

  developer: Dev = null;
  skills = '';

  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let devId = params.get('id');

      this.db.getDeveloper(devId).then(data => {
        this.developer = data;
        this.skills = this.developer.skills.join(',');
      });
    });
  }

  delete() {
    this.db.deleteDeveloper(this.developer.id).then(() => {
      this.router.navigateByUrl('/');
    });
  }

  updateDeveloper() {
    let skills = this.skills.split(',');
    skills = skills.map(skill => skill.trim());
    this.developer.skills = skills;

    this.db.updateDeveloper(this.developer).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Developer updated',
        duration: 3000
      });
      toast.present();
    });
  }
}
