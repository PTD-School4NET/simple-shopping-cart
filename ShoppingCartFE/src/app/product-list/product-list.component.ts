import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadProducts().subscribe(result => {
      this.products = result;
    });
  }

}
