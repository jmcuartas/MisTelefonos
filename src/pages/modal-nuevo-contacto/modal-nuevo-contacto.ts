import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//Providers
import { GlobalFunctions } from '../../providers/global-functions';

/**
 * Generated class for the ModalNuevoContacto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-nuevo-contacto',
  templateUrl: 'modal-nuevo-contacto.html',
})
export class ModalNuevoContacto {

  popup;
  contacto: any = {name:'', nickname:'', email: '', items:[{type:'', telephone:''}]};  
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public gFunction: GlobalFunctions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoContacto');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  nuevoContacto(){
    this.gFunction.addContacto(this.contacto);
    this.viewCtrl.dismiss();
  }

}
