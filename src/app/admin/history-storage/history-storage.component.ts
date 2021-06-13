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
  diffRowClass: string = 'bg-diff';
  diffColClass: string = 'bg-diff-col';
  diff: Map<string, Number[]>;
  currentProductMap: Map<string, Product>;
  constructor(private historyService: HistoryService) {
    this.diff = new Map();
    this.currentProductMap = new Map();
  }

  ngOnInit(): void {
    this.getInitialHistoryState()
  }

  getInitialHistoryState() {
    this.historyService.getLatestHistory()
        .subscribe(products => {this.historyProducts$ = of(products); 
                                this.initCurrentProductMap();
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

}
