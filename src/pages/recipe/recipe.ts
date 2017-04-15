import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DonutService } from '../../app/donut.service';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  public selectedDonut: any;
  public pageTitle: string;
  public batch: number;
  public myQuantity: number[];
  public myTypes: string[];
  public myYield: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public donut: DonutService) {

    this.selectedDonut = this.navParams.get('selectedDonut');
    this.batch = this.navParams.get('batchSize');
    this.myQuantity = [];
    this.myTypes = [];

    for (let myIng of this.selectedDonut.ingredients) {  //for each ingredient in selectedDonut
      
      this.myTypes.push(myIng.type);
      if (this.myTypes.length > 1) {
        for(let i = 0; i < this.myTypes.length; i++) {
          if(this.myTypes[i] === this.myTypes[i-1]){
            this.myTypes.splice(i, 1); 
          }
        } 
      }
    }

    this.myYield = this.batch * this.donut.FULL_YIELD;

    console.log('navParam -selectedDonut- = ' + this.selectedDonut);
    console.log('navParam -batchSize- = ' + this.batch);
    console.log('myTypes = ' + this.myTypes);

    this.pageTitle = this.selectedDonut.donutType + ' ' + this.selectedDonut.donutFlavor;

    for (let ing of this.selectedDonut.ingredients) {
      let newQ = Math.round(ing.quantity * this.batch);
      this.myQuantity.push(newQ);
    }
  }

  ionViewDidLoad() {
    
  } 

  dismiss() {
    this.navCtrl.pop(RecipePage);
  }
}
