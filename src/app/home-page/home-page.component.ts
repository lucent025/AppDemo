import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProduct().subscribe(data => {
      this.products = data; // Lưu dữ liệu JSON vào biến items
    });
  }
}
