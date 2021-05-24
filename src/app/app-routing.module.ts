import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFound404Component } from './components/dashboard/page-not-found404/page-not-found404.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: '**', component: PageNotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]})
export class AppRoutingModule { }
