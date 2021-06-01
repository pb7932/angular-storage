import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = {id: 0, name:'', price: 0, ingredients: [], calories: 0, quantity: 0, url: ''};
   }

  ngOnInit(): void {
    this.clearProduct();
  }

  clearProduct(): void {
    this.product = {id: 0, name:'', price: 0, ingredients: [], calories: 0, quantity: 0, url: ''};
  }

  onReset():void {
    this.clearProduct();
  }

  onSubmit(): void {
    console.log(this.product);
  }

}
