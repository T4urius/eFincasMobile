import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DeveloperPageComponent } from './developer-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: DeveloperPageComponent
            },
        ])
    ],
    declarations: [DeveloperPageComponent],
    exports: [DeveloperPageComponent]
})
export class DeveloperPageComponentModule { }
