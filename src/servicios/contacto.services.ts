import { Injectable } from "@angular/core";
import {Contacto} from "../model/contacto";
@Injectable()
export class ContactoServicio{

    contactos:Contacto[] = [];
    agregarContacto(nombre:string,telefono:string,
                        contacto1:string,contacto2:string,contacto3:string){
        let contacto=new Contacto(nombre,telefono,contacto1,contacto2,contacto3);

        this.contactos.push(contacto);
    }

    obtenerContacto(){
        return this.contactos.slice().shift();
    }
}