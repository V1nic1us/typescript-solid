import { Message } from '../services/message';
import { Persisty } from '../services/persisty';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _cartClear: boolean = false;

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly save: Persisty,
  ) {}

  public get cartClear(): boolean {
    return this._cartClear;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.message.sendMessage('Carrinho esta vazio');
      return;
    }
    this._cartClear = true;
    this.message.sendMessage('Mensagem enviada');
    this.save.saveOrder();
    this.cart.clear();
  }
}
