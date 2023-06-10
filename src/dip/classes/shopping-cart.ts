import { Discount } from './discount';
import { CartItem } from './interfaces/cart-interface';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
/*
Open/closed principle
Entidade devem estar abertas para extensão, mas fechadas para modificação.
*/
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  totalWithDicount(discount: number): number {
    return this.discount.calculate(this.total());
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
