import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NgForm} from '@angular/forms';

import {EmailComposer} from '@ionic-native/email-composer'


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

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public emailCps:EmailComposer,public alertCtrl: AlertController) {
  
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactPage');
  }
 public dismiss() {
    this.viewCtrl.dismiss(null);
  }


public sendEmail(formulario : NgForm){
  
  this.emailCps.isAvailable().then((available: boolean) =>{
    if(available) {
      let email = {
        to: 'franquicia@vigitrackavl.com',
        cc: this.contact.correo,
        bcc: [],
        attachments: [
        ],
        subject: 'Soporte Vigitrack',
        body: '<p>'+this.contact.mensaje+'</p>'+'<p>'+ this.contact.nombre +'</p>'+'<p>'+ this.contact.nombre +'</p>',
        isHtml: true
      };
      
      this.emailCps.open(email);
    }
    else{
      console.log('El mensaje no se envio');
      this.dismiss();
    }

   });
   
 
  this.dismiss();
  }

  public presentAlert() {
    let alert = this.alertCtrl.create({
      title: '<img src="../../assets/imgs/logoA.png" >',
      message: '<p align="center">www.arlisistem.com.ve</p><p align="center">gerencia@arlisistem.com.ve</p><p align="center">Desarrollado por Maiker Gutiérrez</p><p align="center">m2ikr23@gmail.com</p>',
      buttons: ['ok']
    });
    alert.present();
  }
  

}
