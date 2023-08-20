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

  constructor(private prs: ProductService,
              private formBuilder: FormBuilder) {
    this.categories = this.prs.getAllCategories();
  }

  formModel = this.formBuilder.group({
    'title': [null, Validators.minLength(3)],
    'price': [null, this.positiveNumberValidator],
    'category': [-1]
  });

   positiveNumberValidator(control: FormControl): any {
    if (!control.value) return null;
    const price = parseInt(control.value);
    return price === null || typeof price === 'number' && price > 0 ? null : {positivenumber: true};
  }

  onSearch() {
    if (this.formModel.valid) {
      this.prs.searchEvent.emit(this.formModel);
    }
  }
}
