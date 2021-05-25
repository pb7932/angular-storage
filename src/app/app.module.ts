import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFound404Component } from './components/dashboard/page-not-found404/page-not-found404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFound404Component,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
