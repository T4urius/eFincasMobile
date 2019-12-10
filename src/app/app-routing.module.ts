import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { InvestmentsPageComponent } from './investments-page/investments-page.component';
import { ConfiguresPageComponent } from './configures-page/configures-page.component';
import { PayPageComponent } from './manage-page/tabs/pay-page/pay-page.component';
import { ReceivePageComponent } from './manage-page/tabs/receive-page/receive-page.component';
import { DevelopersPageComponent } from './developer-page/developers/developers-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'manage', component: ManagePageComponent, children: [
      {
        path: 'pay',
        component: PayPageComponent
      },
      {
        path: 'receive',
        component: ReceivePageComponent
      }
    ]
  },
  { path: 'investments', component: InvestmentsPageComponent },
  { path: 'configures', component: ConfiguresPageComponent },
  { path: 'developers', component: DevelopersPageComponent },
  { path: 'developers/:id', component: DevelopersPageComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
