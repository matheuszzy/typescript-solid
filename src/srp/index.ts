import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 60.9 });
shoppingCart.addItem({ name: 'Lapis', price: 70.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
