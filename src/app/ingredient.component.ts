export class Ingredient {
  
  public quantity: number;
  public units: string;
  public item: string;

  constructor(q: number, u: string, i?: string) {
    this.quantity = q;
    this.units = u;
    this.item = i;
  }
}
