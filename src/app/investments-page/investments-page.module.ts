import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InvestmentsPageComponent } from './investments-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: InvestmentsPageComponent
            },
        ])
    ],
    declarations: [InvestmentsPageComponent],
    exports: [InvestmentsPageComponent]
})
export class InvestmentsPageComponentModule { }
