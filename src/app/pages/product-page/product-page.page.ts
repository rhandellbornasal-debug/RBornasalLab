import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../initialization/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss']
})
export class ProductPagePage implements OnInit {

  product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = Number(
      this.activatedRoute.snapshot.paramMap.get('productId')
    );

    this.product = this.productService.getProductById(productId);
  }
}