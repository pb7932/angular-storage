import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
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
  stateSaved: boolean;
  constructor(private productService: ProductService,
              private historyService: HistoryService,
              private dialogService: DialogService) {
                this.stateSaved = true;
               }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {this.products = products});
  }

  onSave(): void {
    this.historyService.createHistory(this.products).subscribe(res => {this.message = 'The state of storage has been saved'});
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(this.stateSaved)
      return true;
    return this.dialogService.confirm('Save changes?');
  }
}
