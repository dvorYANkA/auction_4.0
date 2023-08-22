import {Component} from '@angular/core';
import {ProductService } from '../../services/product-service';
import {Product} from '../../models/product.model';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent{
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string = '';

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(resp => {this.products = resp});
    console.log(this.products.toString())
    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe(
      (value) => (this.filterCriteria = value),
      (error) => console.error(error)
    );
    this.productService.searchEvent.subscribe(products =>{this.products = products});
  }
}
