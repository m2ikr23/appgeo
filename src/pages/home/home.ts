import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ModalSosPage } from '../modal-sos/modal-sos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  presentModal(){
    let modal = this.modalCtrl.create(ModalSosPage);
    modal.present();
  }

}
