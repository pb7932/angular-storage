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
  historyProductMap: Map<string, Product>;
  constructor(private historyService: HistoryService) {
    this.diff = new Map();
    this.historyProductMap = new Map();
  }

  ngOnInit(): void {
    this.getInitialHistoryState()
  }

  getInitialHistoryState() {
    this.historyService.getLatestHistory()
        .subscribe(products => {this.historyProducts$ = of(products); 
                                this.initHistoryProductMap();
                                this.productStateDiff()})
  }
  initHistoryProductMap() {
    this.historyProductMap = new Map();

    let historyProducts!: Product[];
    this.historyProducts$.subscribe(p => historyProducts = p);

    for(let product of historyProducts) {
      this.historyProductMap.set(product.name, product);
    }
  }

  productStateDiff() {
    for(let product of this.currentProducts) {
      let col: number[] = [];
     
      let historyP = this.historyProductMap.get(product.name);
      
      if(historyP) {
        if(product.name != historyP.name) col.push(1);
        if(product.price != historyP.price) col.push(2);
        if(product.ingredients != historyP.ingredients) col.push(3);
        if(product.calories != historyP.calories) col.push(4);
        if(product.quantity != historyP.quantity) col.push(5);
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
