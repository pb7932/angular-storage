import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageStorageComponent } from './manage-storage/manage-storage.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HistoryStorageComponent } from './history-storage/history-storage.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageStorageComponent,
    AddProductComponent,
    UpdateProductComponent,
    HistoryStorageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
