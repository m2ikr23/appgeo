import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public androidPermissions:AndroidPermissions) {
    platform.ready().then(() => {
    statusBar.styleDefault();
      splashScreen.hide();
    this.permisoSms();
    });
  }
  
 permisoSms(){
    this .androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
    .then( success => console.log ( 'Permiso concedido' ), 
    err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION) 
    ); 

    this .androidPermissions.requestPermissions ([ this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,this.androidPermissions.PERMISSION.SEND_SMS]);
  }
} 
