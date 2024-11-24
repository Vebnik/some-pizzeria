import { hashGenerator } from "../../shared";
import { IProduct } from "../interfaces";
import { ProductId } from "../types";

export enum PizzaSize {
  Small,
  Medium,
  Large,
}

export enum PizzaDough {
  Traditional,
  Thin,
}

export class Topping {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name
  }

  get price(): number {
    return this._price
  }
}

export class Pizza implements IProduct {
  private _id: ProductId;
  private _basePrice: number;
  private _name: string;
  private _size: PizzaSize;
  private _dough: PizzaDough;
  private _toppings: Topping[];

  constructor(basePrice: number, name: string, size: PizzaSize, dough: PizzaDough = PizzaDough.Thin, toppings: Topping[] = []) {
    this._id = hashGenerator();
    this._basePrice = basePrice;
    this._name = name;
    this._size = size;
    this._dough = dough;
    this._toppings = toppings;
  }

  get price(): number {
    switch (this._size) {
      case PizzaSize.Small:
        return this._basePrice + (this._basePrice * 0.3) + this.toppingsPrice
      case PizzaSize.Medium:
        return this._basePrice + (this._basePrice * 0.6) + this.toppingsPrice
      case PizzaSize.Large:
        return this._basePrice + (this._basePrice * 0.9) + this.toppingsPrice
      default:
        return this._basePrice + (this._basePrice * 0.3) + this.toppingsPrice
    }
  }

  get toppingsPrice() {
    return this._toppings.reduce((t, v) => t + v.price, 0);
  }


  get name(): string {
    return this._name;
  }

  get id(): ProductId {
    return this._id;
  }

  get size(): PizzaSize {
    return this._size;
  }
  
  get dough(): PizzaDough {
    return this._dough;
  }
}