
import { Component } from '@angular/core';
import { IonicPage,ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

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
                public contactoS:ContactoServicio,private geo:Geolocation) {
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
    this.geo.getCurrentPosition({timeout:10000})
                                  .then(info =>{
                                    this.ubic.lat = info.coords.latitude;
                                    this.ubic.lng = info.coords.longitude;
                                    console.log("http://www.simcardmundi.com/mapaget.php?lat="+this.ubic.lat+"&log="+this.ubic.lng);
                                  }).catch(error =>{
                                    console.log("no se logro acceder a la ubicacion");
                                  } )
  }

  sendSMS(){
    let nombre = this.contactoS.obtenerContacto().nombre;
    let telefono = this.contactoS.obtenerContacto().telefono;
    let contacto1 = this.contactoS.obtenerContacto().contacto1;
    let contacto2 = this.contactoS.obtenerContacto().contacto2;
    let contacto3 = this.contactoS.obtenerContacto().contacto3;

    this.sms(contacto1,nombre,telefono);
    this.sms(contacto2,nombre,telefono);
    this.sms(contacto3,nombre,telefono);
 
}

sms(contacto:string,nombre:string,telefono:string){
  var options={
    replaceLineBreaks: false, 
    android: {
         intent: ''     
      }
}
this.smsVar.send(contacto, nombre + " " + "(" + telefono + ")" + " "
 + "se encuentra en peligro. Contactar urgentemente. Ubicacion: http://www.simcardmundi.com/mapaget.php?lat="+
                                    this.ubic.lat+"&log="+this.ubic.lng
                                                   ,options)
.then(()=>{
    
},()=>{
  console.log(contacto + nombre + " " + "(" + telefono + ")" + " "
  + "se encuentra en peligro. Contactar urgentemente. Ubicacion: http://www.simcardmundi.com/mapaget.php?lat="+
                                     this.ubic.lat+"&log="+this.ubic.lng)
                                                 
});
}
}