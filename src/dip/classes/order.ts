import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDicount} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
