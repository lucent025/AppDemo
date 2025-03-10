import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

  addToCart(product: JSON) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let existingProduct = cart.find((product_in_cart: any) => product_in_cart.id === this.product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.product.quantity = 1;
      cart.push(this.product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
