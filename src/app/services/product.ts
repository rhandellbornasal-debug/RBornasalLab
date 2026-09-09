import { Injectable } from '@angular/core';
import { Product } from '../initialization/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 2499,
      image: 'assets/images/shoes.png',
      description: 'Comfortable running shoes for everyday use.'
    },
    {
      id: 2,
      name: 'Black Hoodie',
      price: 1299,
      image: 'assets/images/hoodie.jpg',
      description: 'A comfortable hoodie made from soft cotton.'
    },
    {
      id: 3,
      name: 'Backpack',
      price: 999,
      image: 'assets/images/bag.png',
      description: 'A durable backpack for school and travel.'
    },
    {
      id: 4,
      name: 'Wrist Watch',
      price: 1599,
      image: 'assets/images/watch.jpg',
      description: 'A simple wrist watch with a modern design.'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}