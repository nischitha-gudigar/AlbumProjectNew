import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList?:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(responseData=>this.productList=responseData);
  }

}
