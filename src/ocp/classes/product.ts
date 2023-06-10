import { CartItem } from '../entities/interfaces/cart-interface';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
