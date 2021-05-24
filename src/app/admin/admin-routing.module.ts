import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageStorageComponent } from './manage-storage/manage-storage.component';

const adminRoutes: Routes = [
  { path: 'admin',
   component: AdminDashboardComponent,
   canActivate: [AuthGuard],
   children: [
     {
       path: '',
       canActivateChild: [AuthGuard],
       children: [
        { path: 'products', component: ManageProductsComponent },
        { path: 'storage', component: ManageStorageComponent }
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
