import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';

/**
 * Generated class for the ModalContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-contact',
  templateUrl: 'modal-contact.html',
})
export class ModalContactPage {

  contact= {
    nombre:"",
    correo:"",
    telefono:"",
    mensaje:""
  }

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactPage');
  }
 public dismiss() {
    this.viewCtrl.dismiss(null);
  }

public sendEmail(formulario : NgForm){
  console.log(this.contact);
  this.dismiss();
  }
}
