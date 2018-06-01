
import { Component } from '@angular/core';
import { IonicPage,ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
import { ModalContactSosPage } from '../../pages/modal-contact-sos/modal-contact-sos';

@IonicPage()
@Component({
  selector: 'page-modal-sos',
  templateUrl: 'modal-sos.html',
})
export class ModalSosPage {

  constructor(private smsVar: SMS ,public viewCtrl: ViewController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSosPage');
  }
  presentModal(){
    let modal = this.modalCtrl.create(ModalContactSosPage);
    modal.present();
  }

  public dismiss() {
    this.viewCtrl.dismiss(null);
  }

  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: ''  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('04161238797', 'Hola este msj se envio con exito',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
}
}