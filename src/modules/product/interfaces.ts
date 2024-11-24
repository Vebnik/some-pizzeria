import { ProductId } from "./types";

export interface IProduct {
  get price(): number;
  get name(): string;
  get id(): ProductId;
}