import { Injectable } from '@angular/core';

@Injectable()
export class DonutService {

  public donutType: string;
  public donutFlavor: string;
  public ingredients: Ingredient[];

  public SECURITY = '2holeymoley2';

  public FULL_YIELD = 8;

  public DONUT_TYPES: string[] = ['Gluten-friendly', 'Gluten-friendly Vegan', 'Raised', 'Regular', 'Vegan'];
  public DONUT_FLAVORS: string[] = ['Cake', 'Chocolate', 'Pumpkin', 'Baby Spice', 'Yeast', 'Vegan Yeast', 'Gingerbread', 'Red Velvet'];
  public INGREDIENT_TYPES: string[] = ['Dry', 'Fat', 'Wet', 'Milk', 'Yeast', 'Sugar', '\"Eggs\"'];

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
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'GF Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 16, units: 'grams', item: 'Nutmeg' },
        { type: this.INGREDIENT_TYPES[0], quantity: 16, units: 'grams', item: 'Cinnamon' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1840, units: 'grams', item: 'Milk' }
      ]
      }, {
      donutType: this.DONUT_TYPES[0], donutFlavor: this.DONUT_FLAVORS[1], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: 2960, units: 'grams', item: 'GF Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: 44, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: 88, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 24, units: 'grams', item: 'Baking Soda' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.COCOA_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: 440, units: 'grams', item: 'Sour Cream' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 2400, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[0], donutFlavor: this.DONUT_FLAVORS[2], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'GF Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 48, units: 'grams', item: 'Pumpkin Spice' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: 1216, units: 'grams', item: 'Pumpkin Puree' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.GF_VANILLA, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1640, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[1], donutFlavor: this.DONUT_FLAVORS[3], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: 2488, units: 'grams', item: 'GF Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: 24, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: 100, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 12, units: 'grams', item: 'Baking Soda' },
        { type: this.INGREDIENT_TYPES[0], quantity: 4, units: 'grams', item: 'Nutmeg' },
        { type: this.INGREDIENT_TYPES[0], quantity: 6, units: 'grams', item: 'Cinnamon' },
        { type: this.INGREDIENT_TYPES[5], quantity: 1260, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { type: this.INGREDIENT_TYPES[2], quantity: 768, units: 'grams', item: 'Apple Sauce' },
        { type: this.INGREDIENT_TYPES[3], quantity: 48, units: 'grams', item: 'Vinegar' },
        { type: this.INGREDIENT_TYPES[3], quantity: 24, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1760, units: 'grams', item: 'Soy Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[2], donutFlavor: this.DONUT_FLAVORS[4], ingredients: [
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_MILK, units: 'grams', item: 'Milk (yeast)' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_YEAST, units: 'grams', item: 'Yeast' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar (yeast)' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_FLOUR_1, units: 'grams', item: 'Flour (yeast)' },
        { type: this.INGREDIENT_TYPES[6], quantity: 36, units: 'yolks', item: 'Yolks' },
        { type: this.INGREDIENT_TYPES[5], quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_OIL, units: 'grams', item: 'Vegetable Oil' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_VANILLA, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_LEMONS, units: 'Lemons', item: 'Lemons' },
        { type: this.INGREDIENT_TYPES[3], quantity: this.YEAST_MILK, units: 'grams', item: 'Milk' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.YEAST_FLOUR_2, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.YEAST_SALT, units: 'grams', item: 'Salt' }
      ]
    }, {
      donutType: this.DONUT_TYPES[2], donutFlavor: this.DONUT_FLAVORS[5], ingredients: [
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_MILK, units: 'grams', item: 'Soy Milk (yeast)' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_YEAST, units: 'grams', item: 'Yeast' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar (yeast)' },
        { type: this.INGREDIENT_TYPES[4], quantity: this.YEAST_FLOUR_1, units: 'grams', item: 'Flour (yeast)' },
        { type: this.INGREDIENT_TYPES[6], quantity: 472, units: 'grams', item: 'Egg Replacer' },
        { type: this.INGREDIENT_TYPES[6], quantity: 170, units: 'grams', item: 'Warm Water' },
        { type: this.INGREDIENT_TYPES[5], quantity: this.YEAST_SUGAR_1, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_OIL, units: 'grams', item: 'Vegetable Oil' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_VANILLA, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.YEAST_LEMONS, units: 'Lemons', item: 'Lemons' },
        { type: this.INGREDIENT_TYPES[3], quantity: this.YEAST_MILK, units: 'grams', item: 'Soy Milk' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.YEAST_FLOUR_2, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.YEAST_SALT, units: 'grams', item: 'Salt' }
      ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[0], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 8, units: 'grams', item: 'Nutmeg' },
        { type: this.INGREDIENT_TYPES[0], quantity: 14, units: 'grams', item: 'Cinnamon' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { type: this.INGREDIENT_TYPES[2], quantity: 52, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1600, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[6], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 8, units: 'grams', item: 'Nutmeg' },
        { type: this.INGREDIENT_TYPES[0], quantity: 12, units: 'grams', item: 'Cinnamon' },
        { type: this.INGREDIENT_TYPES[0], quantity: 32, units: 'grams', item: 'Ginger' },
        { type: this.INGREDIENT_TYPES[0], quantity: 8, units: 'grams', item: 'All Spice' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SUGAR, units: 'grams', item: 'Brown Sugar' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { type: this.INGREDIENT_TYPES[2], quantity: 1280, units: 'grams', item: 'Molasses' },
        { type: this.INGREDIENT_TYPES[2], quantity: 280, units: 'grams', item: 'Vegetable Oil' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1480, units: 'grams', item: 'Milk' }
     ]
    }, {
      donutType: this.DONUT_TYPES[3], donutFlavor: this.DONUT_FLAVORS[7], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 1600, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Butter' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_EGGS, units: 'Eggs', item: 'Eggs' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Sour Cream' },
        { type: this.INGREDIENT_TYPES[2], quantity: 136, units: 'grams', item: 'Vinegar' },
        { type: this.INGREDIENT_TYPES[2], quantity: 56, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[2], quantity: 160, units: 'grams', item: 'Red Food Coloring' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1600, units: 'grams', item: 'Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[4], donutFlavor: this.DONUT_FLAVORS[0], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SALT, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_B_P, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 4, units: 'grams', item: 'Nutmeg' },
        { type: this.INGREDIENT_TYPES[0], quantity: 8, units: 'grams', item: 'Cinnamon' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { type: this.INGREDIENT_TYPES[2], quantity: 56, units: 'grams', item: 'Egg Replacer' },
        { type: this.INGREDIENT_TYPES[2], quantity: 480, units: 'grams', item: 'Warm Water' },
        { type: this.INGREDIENT_TYPES[2], quantity: this.CAKE_SOURCREAM, units: 'grams', item: 'Coconut Milk' },
        { type: this.INGREDIENT_TYPES[2], quantity: 80, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 1564, units: 'grams', item: 'Soy Milk' }
      ]
    }, {
      donutType: this.DONUT_TYPES[4], donutFlavor: this.DONUT_FLAVORS[1], ingredients: [
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_FLOUR, units: 'grams', item: 'Flour' },
        { type: this.INGREDIENT_TYPES[0], quantity: 48, units: 'grams', item: 'Salt' },
        { type: this.INGREDIENT_TYPES[0], quantity: 88, units: 'grams', item: 'Baking Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: 24, units: 'grams', item: 'Baking Soda' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.CAKE_COCOA, units: 'grams', item: 'Cocoa Powder' },
        { type: this.INGREDIENT_TYPES[0], quantity: this.COCOA_SUGAR, units: 'grams', item: 'Sugar' },
        { type: this.INGREDIENT_TYPES[1], quantity: this.CAKE_FAT, units: 'grams', item: 'Shortening' },
        { type: this.INGREDIENT_TYPES[2], quantity: 60, units: 'grams', item: 'Egg Replacer' },
        { type: this.INGREDIENT_TYPES[2], quantity: 356, units: 'grams', item: 'Warm Water' },
        { type: this.INGREDIENT_TYPES[2], quantity: 48, units: 'grams', item: 'Vanilla' },
        { type: this.INGREDIENT_TYPES[3], quantity: 2120, units: 'grams', item: 'Soy Milk' }
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
    if (this.SECURITY !== s) {
      this.SECURITY = s;
    }
  }

}
/*****  *****/



export class Ingredient {
  
  public type: string;
  public quantity: number;
  public units: string;
  public item: string;

  constructor(t: string, q: number, u: string, i: string) {
    this.type = t;
    this.quantity = q;
    this.units = u;
    this.item = i;
  }
}
