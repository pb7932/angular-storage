import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageStorageComponent } from './manage-storage/manage-storage.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const adminRoutes: Routes = [
  { path: '',
   component: AdminDashboardComponent,
   canActivate: [AuthGuard],
   children: [
     {
       path: '',
       canActivateChild: [AuthGuard],
       children: [
        { path: '', component: ManageProductsComponent },
        { path: 'storage', component: ManageStorageComponent },
        { path: 'add', component: AddProductComponent },
        { path: ':id', component: UpdateProductComponent }
       ]
     }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
