import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailResolverService } from './product-detail-resolver.service';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolverService } from './product-resolver.service';

const productRoutes: Routes = [
  { path: '', 
    component: ProductListComponent, 
    resolve: {products: ProductResolverService}  },
  { path: ':id', 
    component: ProductDetailsComponent, 
    resolve: { product: ProductDetailResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
