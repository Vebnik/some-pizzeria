import { Order, OrderID } from "../order";
import { IProduct } from "../product";
import { IPizzeria, WorkingHours } from "./interfaces";


/**
* Pizzeria class 
*/
export class Pizzeria implements IPizzeria {
  private _orders: { [key: OrderID]: Order } = {};
  private _name: string;
  private _address: string
  private _workingHours: WorkingHours;

  constructor(name: string, address: string, workingHours: WorkingHours = { start: new Date(), end: new Date() }) {
    this._name = name;
    this._address = address;
    this._workingHours = workingHours;

    console.log("[DEBUG] Created Pizzeria ->", name, address);
  }

  createOrder(...products: IProduct[]): Order {
    const order = new Order(...products)

    this._orders[order.id] = order;

    return order;
  }

  getOrder(id: OrderID): Order | null {
    if (this._orders[id])
      return this._orders[id];
    return null;
  }

  removeOrder(id: OrderID) {
    if (this._orders[id]) {
      delete this._orders[id]
    }
  }

  get orders(): { [key: OrderID]: Order } {
    return this._orders;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  get workingHours(): WorkingHours {
    return this._workingHours;
  }

  get summary(): number {
    return Object.values(this.orders).reduce((t, v) => t + v.fullPrice, 0)
  }

}
