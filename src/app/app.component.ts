import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DonutService } from './donut.service';

import { Page1 } from '../pages/page1/page1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = Page1;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public donut: DonutService) {

    this.initializeApp();
    
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      if(this.splashScreen) {
        setTimeout(() => {
          this.splashScreen.hide();
        }, 100);
      }
    });
  }

  hideSpash


}
