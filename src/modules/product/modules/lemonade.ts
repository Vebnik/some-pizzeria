import { hashGenerator } from "../../shared";
import { IProduct } from "../interfaces";
import { ProductId } from "../types";

export class Lemonade implements IProduct {
    private _id: ProductId;
    private _basePrice: number;
    private _name: string;
  
    constructor(basePrice: number, name: string) {
      this._id = hashGenerator()
      this._basePrice = basePrice
      this._name = name
    }
    
    get price() : number {
      return this._basePrice
    }
  
    get name(): string {
      return this._name
    }
  
    get id(): ProductId {
      return this._id;
    }
}