import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalFunctions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalFunctions {

  loading: Loading;
  alert: any;
  popup: any;
  Contactos;

  constructor(private alertCtrl: AlertController, 
              private loadingCtrl: LoadingController) {   
                this.Contactos = [];
                this.inicializaLista();             
  }

  /** Metodos Popup */
  public showLoading(text) : Loading {
    this.loading = this.loadingCtrl.create({
      content: text,
      dismissOnPageChange: true
    });

    return this.loading;
  }

  public showError(text): AlertController{
    this.alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    return this.alert;
  }

  public showPopup(title, text): AlertController {
    this.popup = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    return this.popup;
  }


  /** Metodos de la lista de contactos */
  inicializaLista(){
    this.Contactos = [{
      name:  'Fran',
      nickname: 'The Crack',
      email: 'fran@gmail.com',
      items: [{
        type: 'Casa',
        telephone: '321654987'
        }]
      },{
      name:  'Chang',
      nickname: 'The Police',
      email: 'chang@gmail.com',
      items: [{
        type: 'Movil',
        telephone: '654987321'
        }]
      },{
      name:  'Pepe',
      nickname: 'The Frog',
      email: 'pepe@gmail.com',
      items: [{
        type: 'Empresa',
        telephone: '654321987'
        }]
      }
    ];
  }

  getListaContactos(): any{
    return this.Contactos;
  }
}
