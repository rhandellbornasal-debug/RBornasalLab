import { Component, OnInit } from '@angular/core';
import { Product } from '../../initialization/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss']
  
})
export class CatalogPage implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}