import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DevelopersPageComponent } from './developers-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: DevelopersPageComponent
            },
        ])
    ],
    declarations: [DevelopersPageComponent],
    exports: [DevelopersPageComponent]
})
export class DevelopersPageComponentModule { }
