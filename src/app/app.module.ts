import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageComponentModule } from './register-page/register-page.module';
import { ManagePageComponentModule } from './manage-page/manage-page.module';
import { ConfiguresPageComponentModule } from './configures-page/configures-page.module';
import { InvestmentsPageComponentModule } from './investments-page/investments-page.module';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
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
    SQLite,
    SQLitePorter,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
