import { Component } from '@angular/core';
import { NavController, NavParams, Loading, ModalController } from 'ionic-angular';

//Providers
import { GlobalFunctions } from '../../providers/global-functions';

//Pages
import { ModalDetalleContacto } from '../modal-detalle-contacto/modal-detalle-contacto';
import { ModalNuevoContacto } from '../modal-nuevo-contacto/modal-nuevo-contacto';

/**
 * Generated class for the Listado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class Listado {

  loading: Loading;
  alert: any;
  popup: any;
  contactos;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public gFunction: GlobalFunctions) {      
}

  ionViewDidEnter() {
    this.contactos = this.gFunction.getListaContactos();
  }


  muestraContacto(contacto){
    let modalContacto = this.modalCtrl.create(ModalDetalleContacto, contacto);
    modalContacto.present();
  }

  createContacto(){
    let newContact = this.modalCtrl.create(ModalNuevoContacto);
    newContact.present();
  }

  logout(){
    this.popup = this.gFunction.showPopup("Logout","Not implemented");
    this.popup.present();
  }

}
