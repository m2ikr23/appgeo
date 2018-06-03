
import { ModalContactSosPage } from './../modal-contact-sos/modal-contact-sos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ModalSosPage } from '../modal-sos/modal-sos';
import { ContactoServicio } from '../../servicios/contacto.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public contactoS:ContactoServicio) {

  }

  ionViewWillEnter(){

   this.contactoS.cargarDatos();
  }
  sos(){
    let contactos = this.contactoS.obtenerContacto();
    if (contactos==null){
      this.presentModal(ModalContactSosPage);
    }else{
      this.presentModal(ModalSosPage)
    }
  }
  presentModal(page){
    let modal = this.modalCtrl.create(page);
    modal.present();
  }

}
