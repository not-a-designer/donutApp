import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DonutService } from './donut.service';

import { Page1 } from '../pages/page1/page1';
import { RecipePage } from '../pages/recipe/recipe';
import { EditPage } from '../pages/edit/edit';
import { AddPage } from '../pages/add/add';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    RecipePage,
    EditPage,
    AddPage
  ],
  imports: [
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
