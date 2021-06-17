import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoryService } from 'src/app/services/history.service';

import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-history-storage',
  templateUrl: './history-storage.component.html',
  styleUrls: ['./history-storage.component.css']
})
export class HistoryStorageComponent implements OnInit {
  historyProducts$!: Observable<Product[]>;
  @Input() currentProducts!: Product[];
  currentProductMap: Map<string, Product>;
  dateMsg = '';

  diffRowClass: string = 'bg-diff';
  diffColClass: string = 'bg-diff-col';
  diff: Map<string, Number[]>;

 
  constructor(private historyService: HistoryService) {
    this.diff = new Map();
    this.currentProductMap = new Map();
  }

  ngOnInit(): void {
    this.getInitialHistoryState()
    this.initCurrentProductMap()
  }

  getInitialHistoryState() {
    this.historyService.getLatestHistory()
        .subscribe(products => {this.historyProducts$ = of(products); 
                                this.productStateDiff()})
  }

  initCurrentProductMap() {
    this.currentProductMap = new Map();

    for(let product of this.currentProducts) {
      this.currentProductMap.set(product.name, product);
    }
  }

  productStateDiff() {
    let historyProducts!: Product[];
    this.historyProducts$.subscribe(p => historyProducts = p);

    for(let product of historyProducts) {
      let col: number[] = [];
     
      let currentP = this.currentProductMap.get(product.name);
     
      if(currentP) {
        if(product.name != currentP.name) col.push(1);
        if(product.price != currentP.price) col.push(2);
        if(product.ingredients != currentP.ingredients) col.push(3);
        if(product.calories != currentP.calories) col.push(4);
        if(product.quantity != currentP.quantity) col.push(5);
      }
      else {
        col.push(1);
        col.push(2);
        col.push(3);
        col.push(4);
        col.push(5);
      }

      if(col.length > 0) this.diff.set(product.name, col);
    }
  }

  getColumnDiffClass(name: string, colNum: Number): string {
    let row = this.diff.get(name);
    let col = row?.filter(x => x == colNum);

    if(col)
      return col.length > 0 ? 'bg-diff-col' : '';

    return '';
  }

  chooseStateByDate(date: string) {
    if(this.dateMsg)
      this.dateMsg = '';
    
    let now = new Date(Date.now());
    let today = now.toISOString();

    if(date > today) {
      this.dateMsg = 'Can not get storage state with a future date.';
      return;
    }
      
    this.historyService.getHistoryByDate(date)
        .subscribe(products => {
                  if(products) this.historyProducts$ = of(products)
                  else this.dateMsg = 'There is no saved state before the chosen date.'; 
                  this.productStateDiff()
                })
  }
}
