import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import {PopoverController } from 'ionic-angular';

import { PopContacPage } from '../../pages/pop-contac/pop-contac';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent  implements OnInit  {

  ngOnInit(): void {
   
  }
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  
  constructor(public popoverCtrl: PopoverController) {
   
  }

 
  presentPopover(myevent) {
    let popover = this.popoverCtrl.create(PopContacPage, {}, {
      cssClass: 'my-popover popover-class'
    });
     
    popover.present({ev:myevent});
  }

}
