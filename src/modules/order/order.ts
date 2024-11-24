import { IProduct, ProductId } from "../product";
import { hashGenerator } from "../shared/utilts";
import { OrderID } from "./types";

export class Order {
  private _id: OrderID;
  private _products: IProduct[];

  constructor(...products: IProduct[]) {
    this._id = hashGenerator();
    this._products = products;
  }

  removeProduct(id: ProductId): void {
    this._products = this._products.filter(p => p.id !== id);
  }

  addProduct(...product: IProduct[]): void {
    const existProduct = product.filter(el => this.products.findIndex(p => p.id === el.id) !== -1);

    if (existProduct.length) {
      console.error(`Exists products: ${existProduct.map(el => el.name)}`);
      return;
    }

    this._products = this._products.concat(product);
  }

  // getters
  get fullPrice() {
    return this.products.reduce((t, v) => t + v.price, 0);
  }

  get products(): IProduct[] {
    return this._products;
  }

  get id(): OrderID {
    return this._id;
  }
}
