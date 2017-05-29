import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

//Pages
import { ModalEditarContacto } from '../modal-editar-contacto/modal-editar-contacto';
//Providers
import { GlobalFunctions } from '../../providers/global-functions';

/**
 * Generated class for the ModalDetalleContacto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-detalle-contacto',
  templateUrl: 'modal-detalle-contacto.html',
})
export class ModalDetalleContacto {

  popup: any;
  contacto: any = {name:'', nickname:'', email: '', items:[{type:'', telephone:''}]};  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public gFunction: GlobalFunctions,
              public modalCtrl: ModalController) {                
                this.contacto.name = this.navParams.get('name');
                this.contacto.nickname = this.navParams.get('nickname');
                this.contacto.email = this.navParams.get('email');
                this.contacto.items = this.navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleContacto');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  editarContacto(){
    let modalEditar = this.modalCtrl.create(ModalEditarContacto);
    modalEditar.present();
  }


}
