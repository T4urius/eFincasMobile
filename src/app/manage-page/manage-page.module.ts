import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ManagePageComponent } from './manage-page.component';
import { PayPageComponentModule } from './pay-page/pay-page.module';
import { ReceivePageComponentModule } from './receive-page/receive-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPageComponentModule,
    ReceivePageComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManagePageComponent
      },
    ])
  ],
  declarations: [ManagePageComponent],
  exports: [ManagePageComponent]
})
export class ManagePageComponentModule { }
