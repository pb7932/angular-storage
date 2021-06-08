import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<Product>{

  constructor(private productService: ProductService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const id = route.params.id;

    return this.productService.getProduct(id).pipe(
      take(1),
      mergeMap(
        product => {
          if(product) {
            return of(product);
          }
          else {
            this.router.navigate(['products']);
            return EMPTY;
          }
        }
      )
    )
  }

  
}
