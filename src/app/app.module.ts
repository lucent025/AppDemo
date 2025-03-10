import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './utilities/product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProductCardComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomePageComponent},
      {path: 'products', component: ProductPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
