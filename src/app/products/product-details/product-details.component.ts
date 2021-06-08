import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from '../../services/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { ProductsModule } from '../products.module';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.route.data.subscribe(data => {const product: Product = data.product; 
                                      this.alterProductBeforeShowingOnUI(product)});
  }
  alterProductBeforeShowingOnUI(product: Product): void {
    let ingredients = product.ingredients.toString().split(',');
    this.product = {...product, ingredients: ingredients};
  }

  goBack(): void {
    this.location.back();
  }
}
