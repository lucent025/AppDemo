import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalProducts: number = 0;

  menuVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.style.display = this.menuVisible ? 'block' : 'none';
    }
  }

  ngOnInit() {
    const storedCartItems = localStorage.getItem('cart');
    this.totalProducts = JSON.parse(storedCartItems || '[]').length;
  }

  ngDoCheck() {
    const storedCartItems = localStorage.getItem('cart');
    const currentCartLength = JSON.parse(storedCartItems || '[]').length;
    if (this.totalProducts !== currentCartLength) {
      this.totalProducts = currentCartLength;
    }
  }
}
