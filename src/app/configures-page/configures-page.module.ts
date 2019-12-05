import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConfiguresPageComponent } from './configures-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ConfiguresPageComponent
            },
        ])
    ],
    declarations: [ConfiguresPageComponent],
    exports: [ConfiguresPageComponent]
})
export class ConfiguresPageComponentModule { }
