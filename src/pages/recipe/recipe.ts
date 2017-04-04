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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public donut: DonutService) {

    this.selectedDonut = this.navParams.get('selectedDonut');
    this.batch = this.navParams.get('batchSize');
    this.myQuantity = [];

    console.log('navParam -selectedDonut- = ' + this.selectedDonut);
    console.log('navParam -batchSize- = ' + this.batch);

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
