import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ProductService],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  categories: string[] = [];
  //formModel: FormGroup = new FormGroup(null);
  //fb: FormBuilder = new FormBuilder();

  constructor(private prs: ProductService) {
    this.categories = this.prs.getAllCategories();
  }
}
