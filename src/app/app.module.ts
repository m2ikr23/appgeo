import { NgModule, ErrorHandler } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import {EmailComposer} from '@ionic-native/email-composer'
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { CustomHeaderComponent } from './../components/custom-header/custom-header';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalContactPage } from '../pages/modal-contact/modal-contact';
import { ModalSosPage } from '../pages/modal-sos/modal-sos';
import { ModalContactSosPage } from '../pages/modal-contact-sos/modal-contact-sos';
import { PopContacPage} from '../pages/pop-contac/pop-contac';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactoServicio } from '../servicios/contacto.services';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalContactPage,
    ModalSosPage,
    ModalContactSosPage,
    PopContacPage,
    CustomHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ModalContactPage,
    ModalSosPage,
    ModalContactSosPage,
    PopContacPage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer,
    AndroidPermissions,
    SMS,
    ContactoServicio,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
