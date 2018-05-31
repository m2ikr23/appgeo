import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ModalContactPage } from '../modal-contact/modal-contact';

/**
 * Generated class for the PopContacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-contac',
  templateUrl: 'pop-contac.html',
})
export class PopContacPage {

  constructor(public viewCtrl:ViewController, public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopContacPage');
  }
  public dismiss() {
    this.viewCtrl.dismiss(null);
  }

  presentModal(){
    let modal = this.modalCtrl.create(ModalContactPage);
    modal.present();
    this.dismiss();
  }
}
