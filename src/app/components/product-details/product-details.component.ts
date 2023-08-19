import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';
import {map} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent {
  product: Product = new Product();
  reviews: Review[] = [];
  newComment: string = '';
  newRating: number = 0;
  isReviewHidden: boolean = true;
  constructor(route: ActivatedRoute, productService: ProductService) {
    let productId: number = parseInt(route.snapshot.params['productId']);
    productService.getProductById(productId).pipe(map((res: Product) => this.product = res));
    productService.getReviewsForProduct(productId).pipe(map((res:Review[]) => this.reviews = res));
  }

  addReview() {
    let review = new Review(
      0,
      this.product.id || 0,
      new Date(),
      'Anonymous',
      this.newRating,
      this.newComment
    );
    console.log('Adding review ' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
    this.resetForm();
  }
  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }
  resetForm() {
    this.newRating = 0;
    this.newComment = '';
    this.isReviewHidden = true;
  }
}
