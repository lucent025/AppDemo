import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: any[] = [];
    constructor(private dataService: DataService) {}
  
    ngOnInit() {
      this.dataService.getProduct().subscribe(data => {
        this.products = data; // Lưu dữ liệu JSON vào biến items
      });
    }
}
