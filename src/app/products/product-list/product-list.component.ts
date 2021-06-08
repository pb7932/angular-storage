import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from '../../services/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.route.data.subscribe(data => {
      const products: Product[] = data.products;
      this.products = products;
    })
  }
}
