import { Product } from '../models/product.model';
import { Review } from '../models/review.model';
import {map, Observable} from 'rxjs';
import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';

export interface ProductSearchParams {
  title: string;
  minPrice: number;
  maxPrice: number;
}

@Injectable({providedIn: 'root'})
export class ProductService {
  searchEvent = new EventEmitter();

  constructor(private http: Http) {}
  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http
      .get('http://localhost:8080/products', {search: this.encodeParams(params)})
      .pipe(map(response => response.json()));
  }

  encodeParams(params: any): URLSearchParams {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((accum: URLSearchParams, key: string) => {
        accum.append(key, params[key]);
        return accum;
      }, new URLSearchParams());
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/products').pipe(map(response => response.json()));
  }
  getProductById(productId: number): Observable<Product> {
    return this.http.get(`http://localhost:8080/products/${productId}`).pipe(map(response => response.json()));
  }
  getReviewsForProduct(productId: number): Observable<Review[]> {
    return this.http
      .get(`http://localhost:8080/products/${productId}/reviews`).pipe(
        map(response => response.json().map( (reviews: Review[])  => reviews.map(
        (r: any) => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment)))));
  }
  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}
const products: Product[] = [
  {
    id: 0,
    title: 'First Product',
    price: 24,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware'],
    rating: 4,
  },
  {
    id: 1,
    title: 'Second Product',
    price: 64,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books'],
    rating: 3,
  },
  {
    id: 2,
    title: 'Third Product',
    price: 74,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics'],
    rating: 4,
  },
  {
    id: 3,
    title: 'Fourth Product',
    price: 84,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['hardware'],
    rating: 3,
  },
  {
    id: 4,
    title: 'Fifth Product',
    price: 94,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware'],
    rating: 5,
  },
  {
    id: 5,
    title: 'Sixth Product',
    price: 54,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books'],
    rating: 4,
  },
];

const reviews = [
  {
    id: 0,
    productId: 0,
    timestamp: '2014-05-20T02:17:00+00:00',
    user: 'User 1',
    rating: 5,
    comment: 'Aenean vestibulum velit id placerat posuere. Praesent...',
  },
  {
    id: 1,
    productId: 0,
    timestamp: '2014-05-20T02:53:00+00:00',
    user: 'User 2',
    rating: 3,
    comment: 'Aenean vestibulum velit id placerat posuere. Praesent... ',
  },
];
