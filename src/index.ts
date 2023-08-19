interface Product {
  id: number;
  name: string;
  price: number;
}

export class ShoppingCart {
  private readonly _items: Product[] = [];
  private cartClear: boolean = false;

  addItem(product: Readonly<Product>): void {
    this._items.push(product);
  }

  removeItem(product: Product): void {
    this._items.filter((item) => item.id !== product.id);
  }

  public get items(): Readonly<Product[]> {
    return this._items;
  }

  // public set items(product: Product) {
  //   this._items.push(product);
  // }

  total(): number {
    return this._items.reduce((acumulador, product) => acumulador + product.price, 0);
  }

  checkout(): void {
    if (this.isEmpty()) {
      this.sendMessage('Carrinho esta vazio');
      return;
    }
    this.cartClear = true;
    this.sendMessage('Mensagem enviada');
    this.saveOrder();
    this.clear();
  }

  sendMessage(message: string) {
    console.log(message);
  }

  saveOrder() {
    console.log('Pedido salvo com sucesso');
  }

  clear() {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'Agua', id: 1, price: 250 });
cart.addItem({ name: 'Agua com gas', id: 2, price: 500 });
cart.addItem({ name: 'Coca-Cola', id: 3, price: 1000 });
cart.removeItem({ name: 'Coca-Cola', id: 3, price: 1000 });
// console.log(cart.total());
cart.checkout();
console.log(cart);
