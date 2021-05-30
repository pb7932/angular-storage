import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from '../../services/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
