import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DonutService } from '../../app/donut.service';


@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class Edit {

  public selectedDonut: any;
  public selectedIdx: number;
  public selectedItem: string;
  public currentQ: number;
  public pageTitle: string;
  public newQuantity: number;

  public sOptions: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public donut: DonutService
  ) {

    this.selectedDonut = this.navParams.get('selectedDonut');
    this.pageTitle = this.selectedDonut.donutType + ' ' + this.selectedDonut.donutFlavor;

    this.newQuantity = null;
    this.selectedIdx = 0;
    this.selectedItem = this.selectedDonut.ingredients[this.selectedIdx].item;
    this.currentQ = this.selectedDonut.ingredients[this.selectedIdx].quantity;

    this.sOptions = {
      title: 'Edit',
      message: 'select ingredient'
    };
  }





  updateRecipe(newQ: number) {
    this.donut.updateQuantity(this.selectedDonut, this.selectedItem, newQ);
    this.dismiss();
  }

  dismiss() {
    this.navCtrl.pop('Edit');
  }
}
