import { Product } from '../models/product.model';
import { Review } from '../models/review.model';

export class ProductService {
  getProducts(): Product[] {
    return products.map(
      (p) =>
        new Product(
          p.rating,
          p.id,
          p.title,
          p.price,
          p.description,
          p.categories
        )
    );
  }
  getProductById(productId: number): Product {
    return products.find((p) => p.id === productId) as Product;
  }
  getReviewsForProduct(productId: number): Review[] {
    return reviews
      .filter((r) => r.productId === productId)
      .map(
        (r) =>
          new Review(
            r.id,
            r.productId,
            new Date(r.timestamp),
            r.user,
            r.rating,
            r.comment
          )
      );
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
