import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import {FormControl, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl,} from '@angular/forms';
import {ProductFilterModel} from "../../models/filters/product-filter.model";
import {HttpResponse} from "@angular/common/http";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  categories: string[] = [];

  constructor(private prs: ProductService,
              private formBuilder: FormBuilder) {
    this.categories = this.prs.getAllCategories();
  }

  formModel = this.formBuilder.group({
    'title': new FormControl(null, [Validators.minLength(3)]),
    'price': new FormControl(null, [this.positiveNumberValidator]),
    'category': new FormControl('All categories')
  });

   positiveNumberValidator(): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
       if (!control.value) return null;
       const price = parseInt(control.value);
       return price === null || typeof price === 'number' && price > 0 ? null : {positivenumber: true};
     }
  }

  onSearch() {
    if (this.formModel.valid) {
      const filter: ProductFilterModel = this.formModel.value;
      console.log(filter.title!.toString() + filter.category!.toString() + filter.price!.toString())
      this.prs.search(filter).subscribe( (resp: HttpResponse<Product[]>) =>{
        if(resp.body) {
          this.prs.searchEvent.emit(resp.body)
        }
      })
    }
  }
}
