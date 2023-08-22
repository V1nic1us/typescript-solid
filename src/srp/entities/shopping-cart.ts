import { cartItem } from '../interface/cartItem';

export class ShoppingCart {
  private readonly _items: cartItem[] = [];

  addItem(product: cartItem): void {
    this._items.push(product);
  }

  removeItem(product: cartItem): void {
    // this._items.splice(product, 1);
    const newarry = this._items.filter((item) => item.name !== product.name && item.price !== product.price);
    this.clear();
    newarry.forEach((item) => this.addItem(item));
  }

  public get items(): Readonly<cartItem[]> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((acumulador, product) => acumulador + product.price, 0);
  }

  clear() {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
