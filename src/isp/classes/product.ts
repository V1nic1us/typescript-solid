import { cartItem } from '../interface/cartItem';

export class Product implements cartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
