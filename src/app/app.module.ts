import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';
import { MisTabs } from '../pages/mis-tabs/mis-tabs';
import { Inicio } from '../pages/inicio/inicio';
import { Listado } from '../pages/listado/listado';
import { Info } from '../pages/info/info';
import { ModalDetalleContacto } from '../pages/modal-detalle-contacto/modal-detalle-contacto';
import { ModalNuevoContacto } from '../pages/modal-nuevo-contacto/modal-nuevo-contacto';
import { ModalEditarContacto } from '../pages/modal-editar-contacto/modal-editar-contacto';

//Providers
import { GlobalFunctions } from '../providers/global-functions';


@NgModule({
  declarations: [
    MyApp,
    MisTabs,
    Inicio,
    Listado,
    Info,
    ModalDetalleContacto,
    ModalNuevoContacto,
    ModalEditarContacto
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
    Info,
    ModalDetalleContacto,
    ModalNuevoContacto,
    ModalEditarContacto
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, GlobalFunctions
  ]
})
export class AppModule {}
