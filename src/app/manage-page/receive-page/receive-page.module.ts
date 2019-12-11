import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ReceivePageComponent } from './receive-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ReceivePageComponent
            },
        ])
    ],
    declarations: [ReceivePageComponent],
    exports: [ReceivePageComponent]
})
export class ReceivePageComponentModule { }
