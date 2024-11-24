import { Order, OrderID } from "../order";

export interface IPizzeria {
  createOrder(): Order;
  getOrder(id: OrderID): Order | null;
  removeOrder(id: OrderID): void;

  // getters
  get name(): string;
  get address(): string;
  get workingHours(): WorkingHours;
  get orders(): { [key: OrderID]: Order };
  get summary(): number;
}

export interface WorkingHours {
  start: Date;
  end: Date;
}