import { Component } from '@angular/core';

import { IonicPage, Platform, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DonutService } from '../../app/donut.service';

/*import { Recipe } from '../recipe/recipe';
import { Edit } from '../edit/edit';
import { Add } from '../add/add';*/

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  
  public fullBatches: number[];
  public partialBatches: string[];
  public batchCount: number[];
  
  public fOptions: any;
  public pOptions: any;

  public isIos: boolean;
  public isMd: boolean;

  //public BATCH_PARTIAL_SIZE: string[] = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
  //public BATCH_FULL_SIZE: number[] = [0, 1];  

  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public donut: DonutService) {

    this.initializeBatches();

    this.fOptions = { title: 'select full batches' };

    this.pOptions = { title: 'select partial batches' };

    if(this.platform.is('ios')) {
      this.isIos = true;
      this.isMd = false;
    } else if (this.platform.is('android')) {
      this.isIos = false;
      this.isMd = true;
    } else {
      this.isIos = false;
      this.isMd = false;
    }
  }


  resetBatch(i: number) {
    this.fullBatches = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.partialBatches = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    this.batchCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  editDonut(idx: number) {

    this.alertCtrl.create({

      title: '<h2 color=\"hdBrown\">Security<h2>',
      inputs: [{
        name: 'password',
        type: 'password',
        placeholder: 'enter password'
      }], 

      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Continue',
        handler: (data) => {
          if (data.password === this.donut.SECURITY) {
            this.navCtrl.push('Edit', { selectedDonut: this.donut.DONUT_LIST[idx] });
          }
        }
      }]
    }).present();
  }

  showRecipeModal(idx: number) {

    if (this.partialBatches[idx] === '0') {

      this.batchCount[idx] = this.fullBatches[idx];
      console.log(this.fullBatches[idx]);

    } else {

      let numOut: number = this.fullBatches[idx] + eval(this.partialBatches[idx]);
      console.log('numOut ' + numOut);
      if (numOut > 10) {
        let myString = numOut.toString().split('.');
        numOut = Number(myString[0]) / 10;
        numOut += Number('.' + myString[1]);
        console.log('numOut = ' + numOut);
      }
      this.batchCount[idx] = numOut;
      console.log('full ' + this.fullBatches[idx] + ', partial ' + eval(this.partialBatches[idx]));
    }

    console.log('batchCount index = ' + idx);
    console.log('batchCount['+ idx + '] = ' + this.batchCount[idx]);
    if (this.batchCount[idx] > 0) {

      this.navCtrl.push('Recipe', {
        selectedDonut: this.donut.DONUT_LIST[idx],
        batchSize: this.batchCount[idx]
      });

    } else {
      this.alertCtrl.create({
        title: 'Error',
        message: 'No batch size',
        buttons: ['OK']
      }).present();
    }    
  }



  addNewDonut(){
    this.alertCtrl.create({

      title: 'Security',
      inputs: [{
        name: 'password',
        type: 'password',
        placeholder: 'enter password'
      }], 

      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Continue',
        handler: (data) => {
          if (data.password === this.donut.SECURITY) {
            this.navCtrl.push('Add');
          }
        }
      }]
    }).present();
  }


  changePassword() {
    this.alertCtrl.create({
      title: 'Security',
      inputs: [{
        name: 'current',
        placeholder: 'current password',
      }, {
        name: 'newPassword',
        placeholder: 'new password'
      }, {
        name: 'confirm',
        placeholder: 'confirm password'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Confirm',
        handler: (data) => {

          if (data.current !== '' && data.newPassword !== '' && data.confirm !== '') {               //no empty inputs

            if (data.current === this.donut.SECURITY && data.newPassword !== this.donut.SECURITY) {  //current matches, new does not

              if (data.newPassword === data.confirm) {

                this.donut.changePassword(data.newPassword);
                this.toastCtrl.create({
                  message: 'SUCCESS: Password successfully changed: (' + data.newPassword + ')',
                  duration: 3000,
                  position: 'bottom'
                }).present();
              } else {
                this.toastCtrl.create({
                  message: 'ERROR: password and confirmation do not match',
                  duration: 3000,
                  position: 'bottom'
                }).present();
              }
            } else {
              this.toastCtrl.create({
                message: 'ERROR: incorrect current password OR new password matches current password',
                duration: 3000,
                position: 'bottom'
              }).present();
            }
          } else {
            this.toastCtrl.create({
              message: 'ERROR: please enter all fields',
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        }
      }]
    }).present();
  }


  initializeBatches() {
    for (let i = 0; i < this.donut.DONUT_LIST.length; i++) {
      this.resetBatch(i);
    }
  }
}
