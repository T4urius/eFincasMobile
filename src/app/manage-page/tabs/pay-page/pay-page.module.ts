import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PayPageComponent } from './pay-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: PayPageComponent
            },
        ])
    ],
    providers: [
        {
            provide: LOCALE_ID, useValue: 'pt-BR'
        }
    ],
    declarations: [PayPageComponent],
    exports: [PayPageComponent]
})
export class PayPageComponentModule { }
