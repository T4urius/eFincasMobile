import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageComponentModule } from './register-page/register-page.module';
import { ManagePageComponentModule } from './manage-page/manage-page.module';
import { ConfiguresPageComponentModule } from './configures-page/configures-page.module';
import { InvestmentsPageComponentModule } from './investments-page/investments-page.module';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './database.service';
import { ContaService } from './contas.service';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    RegisterPageComponentModule,
    ManagePageComponentModule,
    ConfiguresPageComponentModule,
    InvestmentsPageComponentModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    SQLite,
    DatabaseService,
    ContaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
