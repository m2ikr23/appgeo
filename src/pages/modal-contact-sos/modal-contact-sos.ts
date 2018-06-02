
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ContactoServicio } from "../../servicios/contacto.services"
import { Contacto } from "../../model/contacto"

@IonicPage()
@Component({
  selector: 'page-modal-contact-sos',
  templateUrl: 'modal-contact-sos.html',
})
export class ModalContactSosPage {
  contactos : Contacto[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams,public contactoS:ContactoServicio) {
  }

  ionViewDidLoad() {
    if(this.contactoS.obtenerContacto()==null){
      console.log('vacio');
    }else{
        console.log(this.contactoS.obtenerContacto());
    }
  
  }
  registrarContact(formulario : NgForm){
    let nombre = formulario.value.nombre;
    let telefono = formulario.value.telefono;
    let contacto1 = formulario.value.contacto1;
    let contacto2 = formulario.value.contacto2;
    let contacto3 = formulario.value.contacto3;
   
    this.contactoS.agregarContacto(nombre,telefono,contacto1,contacto2,contacto3);
    console.log(this.contactoS.obtenerContacto());
    this.dismiss();
  }

  cargarcontactos(){
    let fcontacto= this.contactoS.obtenerContacto()
    if(fcontacto!=null){
       return this.contactoS.obtenerContacto();
    }else{
      return "";
    }
   
  }
  public dismiss() {
    this.viewCtrl.dismiss(null);
  }
}
