import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-storage',
  templateUrl: './manage-storage.component.html',
  styleUrls: ['./manage-storage.component.css']
})
export class ManageStorageComponent implements OnInit {
  products!: Product[];
  message: string = '';
  constructor(private productService: ProductService,
              private historyService: HistoryService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {this.products = products});
  }

  onSave(): void {
    this.historyService.createHistory(this.products).subscribe(res => {this.message = 'The state of storage has been saved'});
  }

}
