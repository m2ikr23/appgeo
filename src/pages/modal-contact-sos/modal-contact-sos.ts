import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ModalContactSosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-contact-sos',
  templateUrl: 'modal-contact-sos.html',
})
export class ModalContactSosPage {
  contact= {
    nombre:"",
    telefono:"",
    contact1:"",
    contact2:"",
    contact3:"",
  }
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactSosPage');
  }
  registrarContact(formulario : NgForm){

  }
  public dismiss() {
    this.viewCtrl.dismiss(null);
  }
}
