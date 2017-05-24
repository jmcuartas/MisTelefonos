import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';


//Providers
//Providers
import { GlobalFunctions } from '../../providers/global-functions';

/**
 * Generated class for the Inicio page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  loading: Loading;
  alert: any;
  popup: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public gFunction: GlobalFunctions) {
  }

  /** Eventos */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');    
  }

  ionViewDidEnter(){
    
    //Ventana modal que enseña la ventana cargando, con el texto que le pases
    //this.loading = this.gFunction.showLoading("Hola Juanma.");
    //this.loading.present();

    //ventana que enseña popup
    //this.popup = this.gFunction.showPopup("Login","Cuenta creada");
    //this.popup.present();

    //ventana que enseña 
    //this.alert = this.gFunction.showError("Sin implementar");
    //this.alert.present(prompt);
  }

  /** Metodos */
  logout(){
    this.popup = this.gFunction.showPopup("Logout","Sin implementar");
    this.popup.present();
  }


}
