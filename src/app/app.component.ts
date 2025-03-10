import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']  
})

export class AppComponent implements OnInit {
  
  
  title = 'AppDemo';
  ngOnInit() {
    initFlowbite();
  }
}
