import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MisTabs } from '../pages/mis-tabs/mis-tabs';
import { Inicio } from '../pages/inicio/inicio';
import { Listado } from '../pages/listado/listado';
import { Info } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    MisTabs,
    Inicio,
    Listado,
    Info
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabs,
    Inicio,
    Listado,
    Info
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
