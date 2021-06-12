import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs/operators';

import { Product } from '../../services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  private searchText$ = new Subject<string>();
  isProductForDelete: boolean[];

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              ) {
    this.isProductForDelete = [];
   }

  ngOnInit(): void {
    this.products$ = this.searchText$.pipe(
     startWith(''),
     tap(term => {this.initProductDeleteArray();}),
     debounceTime(500),
     distinctUntilChanged(),
     switchMap(term => this.productService.getProducts(term || ''))
   );
    
  }

  initProductDeleteArray() {
    for(let index in this.products$){
      this.isProductForDelete.push(false);
    }
  }

  getProducts(): void {
    this.productService.getProducts('')
        .subscribe(products => {this.products$ = of(products); this.initProductDeleteArray();});
  }

  onUpdate(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  onDelete(id: number): void {
    this.isProductForDelete[id-1] = true;
  }

  abortDelete(id: number): void {
    this.isProductForDelete[id-1] = false;
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(res => this.getProducts());
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  search(term: string) {
    this.searchText$.next(term);
  }
}
