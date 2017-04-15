import { Component } from '@angular/core';

import {NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { DonutService, Ingredient } from '../../app/donut.service';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})

export class AddPage {
 
  public newDonut: any;
  public newType: string;
  public newFlavor: string;

  public tOptions: any;
  public fOptions: any;

  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public donut: DonutService
  ) {

    this.tOptions = { title: 'select new type' };

    this.fOptions = { title: 'select new flavor' };

    this.newDonut = {
      donutType: 'none', donutFlavor: 'none', ingredients: []
    };
  }

  dismiss() {
    this.navCtrl.pop(AddPage);
  }

  showNewTypeAlert() {
    this.alertCtrl.create({
      title: 'New Type',
      inputs: [{
        name: 'newType',
        placeholder: 'new type'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Add',
        handler: (data) => {
          let counter = 0;
          if (data.newType !== '' && isNaN(data.newType)) {

            for (let myType of this.donut.DONUT_TYPES) {
              if (data.newType.toLowerCase() === myType.toLowerCase()) {
                counter++;
              }
            }
            let stringOut = this.toProperCase(data.newType);
            if (counter === 0) {
              this.donut.addType(stringOut);
              this.newDonut.donutType = stringOut;
              this.toastCtrl.create({
                message: 'SUCCESS: \"' + stringOut + '\" created',
                duration: 3000,
                position: 'bottom'
              }).present();

            } else {
              this.toastCtrl.create({
                message: 'ERROR: \"' + stringOut + '\" already exists',
                duration: 3000,
                position: 'bottom'
              }).present();
            }
          } else {
            this.toastCtrl.create({
              message: 'ERROR: enter a non-numeric type',
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        }
      }]
    }).present();
  }

  showNewFlavorAlert() {
    this.alertCtrl.create({
      title: 'New Flavor',
      inputs: [{
        name: 'newFlavor',
        placeholder: 'new flavor'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Add',
        handler: (data) => {
          let counter = 0;
          if (data.newFlavor !== '' && isNaN(data.newFlavor)) {      //flavor not empty and not a number

            for (let myFlavor of this.donut.DONUT_FLAVORS) {
              if (data.newFlavor.toLowerCase() === myFlavor.toLowerCase()) {
                counter++;
              }
            }
            let stringOut = this.toProperCase(data.newFlavor);
            if (counter === 0) {
              this.donut.addFlavor(stringOut);
              this.newDonut.donutFlavor = stringOut;
              this.toastCtrl.create({
                message: 'SUCCESS: \"' + stringOut + '\" created',
                duration: 3000,
                position: 'bottom'
              }).present();

            } else {
              this.toastCtrl.create({
                message: 'ERROR: \"' + stringOut + '\" already exists',
                duration: 3000,
                position: 'bottom'
              }).present();
            }
          } else {
            this.toastCtrl.create({
              message: 'ERROR: enter a non-numeric flavor',
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        }
      }]
    }).present();
  }

  toProperCase(s: string): string {
    let sLower = s.toLowerCase();
    let words = sLower.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    }
    return words.join(' ');
  }

  addIngredient() {

    this.alertCtrl.create({
      title: 'Add ingredient',
      inputs: [{
        name: 't',
        placeholder: 'dry, wet, fat, yeast, milk, sugar, eggs'
      }, {
        type: 'number',
        min: 0,
        name: 'q',
        placeholder: 'quantity'
      }, {
        name: 'u',
        placeholder: 'units'
      }, {
        name: 'i',
        placeholder: 'item name'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Add',
        handler: (data) => {

          if (data.t !== '' && data.q !== '' && data.u !== '' && data.i !== '') {           //all fields entered

            if (data.q > 0) {                                               //make sure quantity is positive

              let newIngredient = new Ingredient(data.t, data.q, data.u.toLowerCase(), this.toProperCase(data.i));
              this.newDonut.ingredients.push(newIngredient);

              this.toastCtrl.create({
                message: 'SUCCESS: added ingredient: ' + data.i,
                duration: 3000,
                position: 'bottom'
              }).present();
            } else {
              this.toastCtrl.create({
                message: 'ERROR: Quantity must be positive',
                duration: 3000,
                position: 'bottom'
              }).present();
            }
          } else {
            this.toastCtrl.create({
              message: 'ERROR: Enter all fields',
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        }
      }]
    }).present();
  }

  removeIngredient(i: number) {
    let stringOut = this.newDonut.ingredients[i].item;

    if(i > -1){
      this.newDonut.ingredients.splice(i, 1);
    } 
    this.toastCtrl.create({
      message: 'SUCCESS: ingredient removed: ' + stringOut,
      duration: 3000,
      position: 'bottom'
    }).present();
  }

  addToDonutList() {
    
    if (this.newDonut.donutType !== '' && this.newDonut.donutFlavor !== '' && this.newDonut.ingredients.length >0) {  //has type flavor and ingredients

      if (this.isNewDonut()) {

        this.donut.DONUT_LIST.push(this.newDonut);
        this.dismiss();
        this.toastCtrl.create({
          message: 'SUCCESS: ' + this.newDonut.donutType + ' ' + this.newDonut.donutFlavor + ' was created',
          duration: 3000,
          position: 'bottom'
        }).present();

      } else {
        let myDonutTitle = this.newDonut.donutType + ' ' + this.newDonut.donutFlavor;
        this.alertCtrl.create({
          title: 'Error',
          message: 'The ' + myDonutTitle + ' already exists',
          buttons: ['OK']
        });  
      }

    } else {
      this.toastCtrl.create({
          message: 'ERROR: Enter all fields',
          duration: 3000,
          position: 'bottom'
        }).present();
      
    }
  }

 isNewDonut(): boolean {
    let counter: number = 0;
    console.log('counter = ' + counter);

    for (let myDonut of this.donut.DONUT_LIST) { 
      if (myDonut.donutType.toLowerCase() === this.newDonut.donutType.toLowerCase() && myDonut.donutFlavor.toLowerCase() === this.newDonut.donutFlavor.toLowerCase()) {
        counter++;
      }
      console.log('counter = ' + counter);
    }

    return counter === 0 ? true : false;
  }
  
}
