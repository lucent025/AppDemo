import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  products: any[] = [];
  constructor(private dataService: DataService) {}

  totalProducts: number = 0;

  menuVisible: boolean = false;

  ngOnInit() {
    const storedCartItems = localStorage.getItem('cart');
    this.totalProducts = JSON.parse(storedCartItems || '[]').length;
    this.dataService.getProduct().subscribe(data => {
      this.products = data; // Lưu dữ liệu JSON vào biến items
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.style.display = this.menuVisible ? 'block' : 'none';
    }
  }

  ngDoCheck() {
    const storedCartItems = localStorage.getItem('cart');
    const currentCartLength = JSON.parse(storedCartItems || '[]').length;
    if (this.totalProducts !== currentCartLength) {
      this.totalProducts = currentCartLength;
    }
  }

  searchResults: any[] = [];
  isResultsVisible: boolean = false;

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    // const allProducts = ['Product 1', 'Product 2', 'Product 3']; // Example product list

    this.searchResults = this.products.filter(prod => prod.name.toLowerCase().charAt(0) === query.charAt(0)); // Lọc kết quả theo query
    this.isResultsVisible = this.searchResults.length > 0 && query.length > 0;
    // console.log(this.searchResults);
  }

  hideResults() {
    setTimeout(() => {
      this.isResultsVisible = false;
    }, 200); // Tránh mất focus ngay lập tức
  }

  showResults() {
    this.isResultsVisible = true;
  }
}
