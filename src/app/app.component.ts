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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    // this.permisoSms();
    });
  }
  /*permisoSms(){
    this .androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    .then( success => console.log ( 'Permiso concedido' ), 
    err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.SEND_SMS) 
    ); 

    this .androidPermissions.requestPermissions ([ this .androidPermissions.PERMISSION.SEND_SMS]);
  }*/
} 
