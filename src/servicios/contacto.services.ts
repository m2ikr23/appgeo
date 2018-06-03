import { Injectable } from "@angular/core";
import {Contacto} from "../model/contacto";
import {Storage} from '@ionic/storage'
@Injectable()
export class ContactoServicio{

    contactos:Contacto[] = [];

    constructor(public storage:Storage){}

    agregarContacto(nombre:string,telefono:string,
                        contacto1:string,contacto2:string,contacto3:string){
        let contacto=new Contacto(nombre,telefono,contacto1,contacto2,contacto3);
        if(this.contactos==null){
             this.contactos.push(contacto);
        }else{
            this.contactos.shift();
            this.contactos.push(contacto);
        }             
       
        if(this.storage.get('contactos')==null){
           this.storage.set('contactos',this.contactos); 
        }else{
            this.storage.remove('contactos');
            this.storage.set('contactos',this.contactos);
        }
        

    }

    obtenerContacto(){
        
        return this.contactos.slice().pop();
    }

    cargarDatos(){
      
    this.storage.get('contactos').then((contactos:Contacto[])=>{
            if(contactos==null){
               
                this.contactos = [];
                console.log(this.contactos);
            }else{
                this.contactos=contactos
            }
        }).catch((error)=>{
            console.log(error);
        });

    }
}