import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { DialogService } from 'src/app/services/dialog.service';
import { HistoryService } from 'src/app/services/history.service';

import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-storage',
  templateUrl: './manage-storage.component.html',
  styleUrls: ['./manage-storage.component.css']
})
export class ManageStorageComponent implements OnInit, CanComponentDeactivate {
  products!: Product[];
  message: string;
  stateSaved: boolean;
  confirmState: boolean;
  constructor(private productService: ProductService,
              private historyService: HistoryService,
              private dialogService: DialogService) {
                this.stateSaved = false;
                this.message = '';
                this.confirmState = false;
               }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {this.products = products});
  }

  onSave(): void {
    this.historyService.createHistory(this.products)
        .subscribe(res => {this.message = "The state of the storage has been saved."; this.stateSaved = true;});
  }

  saveState() {
    this.dialogService.save();
  }

  leaveState() {
    this.confirmState = false;
    this.dialogService.refuse();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(this.stateSaved)
      return true;
    this.confirmState = true;
    
    return this.dialogService.confirm();
  }
}
