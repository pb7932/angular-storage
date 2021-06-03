import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Product[] = [];
  isProductForDelete: boolean[];

  constructor(private productService: ProductService) {
    this.isProductForDelete = [];
   }

  ngOnInit(): void {
    this.getProducts();
  }

  initProductDeleteArray() {
    for(let index in this.products){
      this.isProductForDelete.push(false);
    }
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => {this.products = products; this.initProductDeleteArray();});
  }

  onDelete(id: number): void {
    this.isProductForDelete[id-1] = true;
  }

  abortDelete(id: number): void {
    this.isProductForDelete[id-1] = false;
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(res => this.getProducts());
  }
}
