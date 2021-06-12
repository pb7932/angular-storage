import { Component, OnInit } from '@angular/core';
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
  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.getInitialHistoryState()
  }
  getInitialHistoryState() {
  this.historyService.getLatestHistory().subscribe(products => {this.historyProducts$ = of(products); console.log({products})})
  }

}
