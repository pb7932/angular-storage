import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFound404Component } from './components/dashboard/page-not-found404/page-not-found404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFound404Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
