import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

//import { Database } from './database.service';
import { DonutService } from './donut.service';

//import { Page1 } from '../pages/page1/page1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:string = "Page1";

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              //private sqlite: SQLite, 
              //public database: Database,
              public donut: DonutService) {

    this.initializeApp();
    
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      this.splashScreen.hide();
      /*if(this.splashScreen) {
        setTimeout(() => {
          this.splashScreen.hide();
        }, 100);
      }*/
      



    });
  }
}
