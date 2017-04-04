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
      donutType: '', donutFlavor: '', ingredients: []
    };
  }

  dismiss() {
    this.navCtrl.pop(AddPage);
  }

  setType(t: string) {
    this.newDonut.donutType = t;
  }

  setFlavor(f: string) {
    this.newDonut.donutFlavor = f;
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
        type: 'number',
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

          if (data.q !== '' && data.u !== '' && data.i !== '') {           //all fields entered

            if (data.q > 0) {                                               //make sure quantity is positive

              let newIngredient = new Ingredient(data.q, data.u.toLowerCase(), this.toProperCase(data.i));
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
      this.donut.DONUT_LIST.push(this.newDonut);
      this.dismiss();
      this.toastCtrl.create({
        message: 'SUCCESS: ' + this.newDonut.donutType + ' ' + this.newDonut.donutFlavor + ' was created',
        duration: 3000,
        position: 'bottom'
      }).present();
    } else {
      this.toastCtrl.create({
        message: 'ERROR: Enter all fields',
        duration: 3000,
        position: 'bottom'
      }).present();
    }
  }
  
}
