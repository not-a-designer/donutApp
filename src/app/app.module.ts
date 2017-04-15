import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { SQLite } from '@ionic-native/sqlite';

//import { Database } from '../recipe.service.ts';

import { MyApp } from './app.component';

import { DonutService } from './donut.service';

import { Page1 } from '../pages/page1/page1';
import { RecipePage } from '../pages/recipe/recipe';
import { EditPage } from '../pages/edit/edit';
import { AddPage } from '../pages/add/add';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    RecipePage,
    EditPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    RecipePage,
    EditPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DonutService,
    //SQLite,
    //Database,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
