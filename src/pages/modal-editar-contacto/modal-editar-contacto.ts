import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

//Providers
import { GlobalFunctions } from '../../providers/global-functions';


/**
 * Generated class for the ModalEditarContacto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-editar-contacto',
  templateUrl: 'modal-editar-contacto.html',
})
export class ModalEditarContacto {

  popup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public gFunction: GlobalFunctions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEditarContacto');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  guardarCambios(){
    this.popup = this.gFunction.showPopup("Save changes","Not implemented");
    this.popup.present();
  }

}
