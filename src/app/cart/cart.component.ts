import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cartItems: any;

  ngOnInit() {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce(
      (total: number, item: any) => total + Number(item.quantity),
      0
    );
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  updateQuantity(item: any, event: Event) {
    const cartItem = this.cartItems.find((i: any) => i.id === item.id);
    if (cartItem) {
      cartItem.quantity = (event.target as HTMLInputElement).value;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }

  checkout() {}
}
