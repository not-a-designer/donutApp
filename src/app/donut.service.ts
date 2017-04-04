import { Injectable } from '@angular/core';

@Injectable()
export class DonutService {

  public donutType: string;
  public donutFlavor: string;
  public ingredients: Ingredient[];

  public SECURITY = '2holeymoley2';

  public DONUT_TYPES: string[] = ['Gluten-friendly', 'Gluten-friendly Vegan', 'Raised', 'Regular', 'Vegan'];;
  public DONUT_FLAVORS: string[] = ['Cake', 'Chocolate', 'Pumpkin', 'Baby Spice', 'Yeast', 'Vegan Yeast', 'Gingerbread', 'Red Velvet'];

  public BATCH_PARTIAL_SIZE: string[] = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
  public BATCH_FULL_SIZE: number[] = [0, 1, 2];  

  public CAKE_FLOUR: number = 2880;  
  public CAKE_SALT: number = 40;
  public CAKE_B_P: number = 120;
  public CAKE_FAT: number = 336;
  public CAKE_SUGAR: number = 900;
  public CAKE_EGGS: number = 12;
  public CAKE_SOURCREAM: number = 392;

  public CAKE_COCOA: number = 324;
  public COCOA_SUGAR: number = 1440;

  public GF_EGGS: number = 16;
  public GF_VANILLA: number = 80;

  public YEAST_FLOUR_2: number = 5000;
  public YEAST_SALT: number = 68;
  public YEAST_YEAST: number = 214;
  public YEAST_SUGAR_1: number = 26;
  public YEAST_FLOUR_1: number = 40;
  public YEAST_SUGAR_2: number = 276;
  public YEAST_VANILLA: number = 38;
  public YEAST_OIL: number = 420;
  public YEAST_LEMONS: number = 3;
  public YEAST_MILK: number = 1200;

  

  public DONUT_LIST: any[] = [{
      donutType: this.DONUT_TYPES[0], donutFlavor: this.DONUT_FLAVORS[0], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'GF Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: 16, units: 'grams', item: 'Nutmeg' },
        { quantity: 16, units: 'grams', item: 'Cinnamon' },
        { quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { quantity: 1840, units: 'grams', item: 'Milk' }
      ]
      }, {
      donutType: this.DONUT_TYPES[0], donutFlavor: this.DONUT_FLAVORS[1], ingredients: [
        { quantity: 2960, units: 'grams', item: 'GF Flour' },
        { quantity: 44, units: 'grams', item: 'Salt' },
        { quantity: 88, units: 'grams', item: 'Baking Powder' },
        { quantity: 24, units: 'grams', item: 'Baking Soda' },
        { quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { quantity: this.COCOA_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: 440, units: 'grams', item: 'Sour Cream' },
        { quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { quantity: 2400, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[0], donutFlavor: this.DONUT_FLAVORS[2], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'GF Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: 48, units: 'grams', item: 'Pumpkin Spice' },
        { quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: 1216, units: 'grams', item: 'Pumpkin Puree' },
        { quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { quantity: 1640, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[1], donutFlavor: this.DONUT_FLAVORS[3], ingredients: [
        { quantity: 2488, units: 'grams', item: 'GF Flour' },
        { quantity: 24, units: 'grams', item: 'Salt' },
        { quantity: 100, units: 'grams', item: 'Baking Powder' },
        { quantity: 12, units: 'grams', item: 'Baking Soda' },
        { quantity: 4, units: 'grams', item: 'Nutmeg' },
        { quantity: 6, units: 'grams', item: 'Cinnamon' },
        { quantity: 1260, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { quantity: 768, units: 'grams', item: 'Apple Sauce' },
        { quantity: 48, units: 'grams', item: 'Vinegar' },
        { quantity: 24, units: 'grams', item: 'Vanilla' },
        { quantity: 1760, units: 'grams', item: 'Soy Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[2], donutFlavor: this.DONUT_FLAVORS[4], ingredients: [
        { quantity: this.YEAST_MILK, units: 'grams', item: 'Milk (yeast)' },
        { quantity: this.YEAST_YEAST, units: 'grams', item: 'Yeast' },
        { quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar (yeast)' },
        { quantity: this.YEAST_FLOUR_1, units: 'grams', item: 'Flour (yeast)' },
        { quantity: 36, units: 'yolks', item: 'Yolks' },
        { quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar' },
        { quantity: this.YEAST_OIL, units: 'grams', item: 'Vegetable Oil' },
        { quantity: this.YEAST_VANILLA, units: 'grams', item: 'Vanilla' },
        { quantity: this.YEAST_LEMONS, units: 'Lemons', item: 'Lemons' },
        { quantity: this.YEAST_MILK, units: 'grams', item: 'Milk' },
        { quantity: this.YEAST_FLOUR_2, units: 'grams', item: 'Flour' },
        { quantity: this.YEAST_SALT, units: 'grams', item: 'Salt' }
      ]
    }, {
      donutType: this.DONUT_TYPES[2], donutFlavor: this.DONUT_FLAVORS[5], ingredients: [
        { quantity: this.YEAST_MILK, units: 'grams', item: 'Soy Milk (yeast)' },
        { quantity: this.YEAST_YEAST, units: 'grams', item: 'Yeast' },
        { quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar (yeast)' },
        { quantity: this.YEAST_FLOUR_1, units: 'grams', item: 'Flour (yeast)' },
        { quantity: 472, units: 'grams', item: 'Egg Replacer' },
        { quantity: 170, units: 'grams', item: 'Warm Water' },
        { quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar' },
        { quantity: this.YEAST_OIL, units: 'grams', item: 'Vegetable Oil' },
        { quantity: this.YEAST_VANILLA, units: 'grams', item: 'Vanilla' },
        { quantity: this.YEAST_LEMONS, units: 'Lemons', item: 'Lemons' },
        { quantity: this.YEAST_MILK, units: 'grams', item: 'Soy Milk' },
        { quantity: this.YEAST_FLOUR_2, units: 'grams', item: 'Flour' },
        { quantity: this.YEAST_SALT, units: 'grams', item: 'Salt' }
      ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[0], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: 8, units: 'grams', item: 'Nutmeg' },
        { quantity: 14, units: 'grams', item: 'Cinnamon' },
        { quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { quantity: 52, units: 'grams', item: 'Vanilla' },
        { quantity: 1600, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[6], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: 8, units: 'grams', item: 'Nutmeg' },
        { quantity: 12, units: 'grams', item: 'Cinnamon' },
        { quantity: 32, units: 'grams', item: 'Ginger' },
        { quantity: 8, units: 'grams', item: 'All Spice' },
        { quantity: this.CAKE_SUGAR, units: 'grams', item: 'Brown Sugar' },
        { quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { quantity: 1280, units: 'grams', item: 'Molasses' },
        { quantity: 280, units: 'grams', item: 'Vegetable Oil' },
        { quantity: 1480, units: 'grams', item: 'Milk' }
     ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[7], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { quantity: 1600, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { quantity: 136, units: 'grams', item: 'Vinegar' },
        { quantity: 56, units: 'grams', item: 'Vanilla' },
        { quantity: 160, units: 'grams', item: 'Red Food Coloring' },
        { quantity: 1600, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[4], donutFlavor: this.DONUT_FLAVORS[0], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { quantity: 4, units: 'grams', item: 'Nutmeg' },
        { quantity: 8, units: 'grams', item: 'Cinnamon' },
        { quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { quantity: 56, units: 'grams', item: 'Egg Replacer' },
        { quantity: 480, units: 'grams', item: 'Warm Water' },
        { quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Coconut Milk' },
        { quantity: 80, units: 'grams', item: 'Vanilla' },
        { quantity: 1564, units: 'grams', item: 'Soy Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[4], donutFlavor: this.DONUT_FLAVORS[1], ingredients: [
        { quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { quantity: 48, units: 'grams', item: 'Salt' },
        { quantity: 88, units: 'grams', item: 'Baking Powder' },
        { quantity: 24, units: 'grams', item: 'Baking Soda' },
        { quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { quantity: this.COCOA_SUGAR, units: 'grams', item: 'Sugar' },
        { quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { quantity: 60, units: 'grams', item: 'Egg Replacer' },
        { quantity: 356, units: 'grams', item: 'Warm Water' },
        { quantity: 48, units: 'grams', item: 'Vanilla' },
        { quantity: 2120, units: 'grams', item: 'Soy Milk' }
      ]
    }];



  

  constructor() {
    this.donutType = 'empty';
    this.donutFlavor = 'empty';
    this.ingredients = [];
  }

  getType(idx: number): string {

    return this.DONUT_LIST[idx].donutType;
  }
  addType(t: string) {
    this.DONUT_TYPES.push(t);
  }
  

  getFlavor(idx: number): string {
    return this.DONUT_LIST[idx].donutFlavor;
  }
  addFlavor(f: string) {
    this.DONUT_FLAVORS.push(f);
  }

  updateQuantity(d: any, i: string, newQ: number) {
    let dIndex: number;
    let iIndex: number;
    for (let dough of this.DONUT_LIST) {
      if (d.donutType === dough.donutType && d.donutFlavor === dough.donutFlavor) {
        dIndex = this.DONUT_LIST.indexOf(d);

        for (let ingred of d.ingredients) {
          if (ingred.item === i) {
            iIndex = dough.ingredients.indexOf(ingred);
          }
        }
      }
    }
    this.DONUT_LIST[dIndex].ingredients[iIndex].quantity = newQ;
  }

  changePassword(s: string) {
    this.SECURITY = s;
  }
}




export class Ingredient {
  
  public quantity: number;
  public units: string;
  public item: string;

  constructor(q: number, u: string, i: string) {
    this.quantity = q;
    this.units = u;
    this.item = i;
  }
}
