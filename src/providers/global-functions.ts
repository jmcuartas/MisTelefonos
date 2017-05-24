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
  popup: any

  constructor(private alertCtrl: AlertController, 
              private loadingCtrl: LoadingController) {                
  }


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

}
