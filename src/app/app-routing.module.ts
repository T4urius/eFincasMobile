import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { InvestmentsPageComponent } from './investments-page/investments-page.component';
import { ConfiguresPageComponent } from './configures-page/configures-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'manage', component: ManagePageComponent },
  { path: 'investments', component: InvestmentsPageComponent },
  { path: 'configures', component: ConfiguresPageComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
