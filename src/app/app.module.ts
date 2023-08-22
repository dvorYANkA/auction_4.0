import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationComponent } from './components/application/application.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { StarsComponent } from './components/stars/stars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter-pipe';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CarouselComponent,
    SearchComponent,
    FooterComponent,
    ApplicationComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    StarsComponent,
    NavbarComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
  ],
  providers: [
    HttpClient,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [ApplicationComponent],
})
export class AppModule {}
