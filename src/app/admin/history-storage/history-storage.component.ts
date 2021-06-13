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
  diff: Map<Number, Number[]>;

  constructor(private historyService: HistoryService) {
    this.diff = new Map();
  }

  ngOnInit(): void {
    this.getInitialHistoryState()
  }

  getInitialHistoryState() {
    this.historyService.getLatestHistory().subscribe(products => {this.historyProducts$ = of(products); 
      this.productStateDiff()})
  }

  productStateDiff() {
    let historyProducts!: Product[];
    this.historyProducts$.subscribe(p => historyProducts = p);

    for(let index in this.currentProducts) {
      let col = [];
      if(this.currentProducts[index].name != historyProducts[index].name) col.push(1)
      if(this.currentProducts[index].price != historyProducts[index].price) col.push(2)
      if(this.currentProducts[index].ingredients != historyProducts[index].ingredients) col.push(3)
      if(this.currentProducts[index].calories != historyProducts[index].calories) col.push(4)
      if(this.currentProducts[index].quantity != historyProducts[index].quantity) col.push(5)
      
      if(col.length > 0)  this.diff.set( historyProducts[index].id, col )
    }
  }

  getColumnDiffClass(id: Number, colNum: Number): string {
    let row = this.diff.get(id);
    let col = row?.filter(x => x == colNum);
    console.log({id, colNum, col});
    if(col)
      return col.length > 0 ? 'bg-diff-col' : '';

    return '';
  }

}
