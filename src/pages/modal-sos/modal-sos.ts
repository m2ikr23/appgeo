
import { Component } from '@angular/core';
import { IonicPage,ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { SMS } from '@ionic-native/sms';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalContactSosPage } from '../../pages/modal-contact-sos/modal-contact-sos';

import { ContactoServicio } from "../../servicios/contacto.services"

@IonicPage()
@Component({
  selector: 'page-modal-sos',
  templateUrl: 'modal-sos.html',
})
export class ModalSosPage {

  ubic= {
    lat:0,
    lng:0
  }

  constructor(private smsVar: SMS ,public viewCtrl: ViewController,
                public navParams: NavParams,public modalCtrl:ModalController,
                public contactoS:ContactoServicio,private geo:Geolocation,
                public androidPermissions:AndroidPermissions) {
  this.permisoSms();
  }

 
  ionViewDidEnter(){
   this.ObtenerUbic();
  }

  presentModal(){
    let modal = this.modalCtrl.create(ModalContactSosPage);
    modal.present();
  }

  public dismiss() {
    this.viewCtrl.dismiss(null);
  }

  ObtenerUbic(){
    this.geo.getCurrentPosition({timeout:6000})
                                  .then(info =>{
                                    this.ubic.lat = info.coords.latitude;
                                    this.ubic.lng = info.coords.longitude;
                                    console.log("https://maps.google.com/?q="+this.ubic.lat+","+this.ubic.lng);
                                  }).catch(error =>{
                                    console.log("no se logro acceder a la ubicacion"+error);
                                  } )
  }

  permisoSms(){
    this .androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    .then( success => console.log ( 'Permiso concedido' ), 
    err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.SEND_SMS) 
    ); 

    this .androidPermissions.requestPermissions ([ this.androidPermissions.PERMISSION.SEND_SMS]);
  }

  sendSMS(){
    let nombre = this.contactoS.obtenerContacto().nombre;
    let telefono = this.contactoS.obtenerContacto().telefono;
    let contacto1 = this.contactoS.obtenerContacto().contacto1;
    let contacto2 = this.contactoS.obtenerContacto().contacto2;
    let contacto3 = this.contactoS.obtenerContacto().contacto3;

    var options={
      replaceLineBreaks: false, 
      android: {
          intent: ''     
       }
         }

    this.sms(contacto1,nombre,telefono,options);
    this.sms(contacto2,nombre,telefono,options);
    this.sms(contacto3,nombre,telefono,options);
 
}

sms(contacto:string,nombre:string,telefono:string,options:{}){
 
  this.smsVar.send(contacto, nombre + " " + "(" + telefono + ")" + " "
 + "se encuentra en peligro. Contactar urgentemente. Ubicación: https://maps.google.com/?q="+this.ubic.lat+","+this.ubic.lng
                                                   ,options)
.then(()=>{
    
},()=>{
  console.log(contacto + nombre)
});

}
}