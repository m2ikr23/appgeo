import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalSosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-sos',
  templateUrl: 'modal-sos.html',
})
export class ModalSosPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSosPage');
  }

  public dismiss() {
    this.viewCtrl.dismiss(null);
  }
}
