import { CartItem } from './cart-interface';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  totalWithDicount(discount: number): number;
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
