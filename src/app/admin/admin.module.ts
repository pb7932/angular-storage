import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageStorageComponent } from './manage-storage/manage-storage.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageStorageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
