import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ManagePageComponent } from './manage-page.component';
import { ReceivePageComponent } from './receive-page/receive-page.component';
import { PayPageComponent } from './pay-page/pay-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManagePageComponent
      },
    ])
  ],
  declarations: [ManagePageComponent, ReceivePageComponent, PayPageComponent],
  exports: [ManagePageComponent]
})
export class ManagePageComponentModule { }
